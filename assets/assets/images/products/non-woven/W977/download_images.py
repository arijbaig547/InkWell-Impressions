import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, unquote

URL = input("Website URL: ").strip()

OUTPUT_DIR = "images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0"
}

response = requests.get(URL, headers=headers, timeout=20)
response.raise_for_status()

soup = BeautifulSoup(response.text, "html.parser")

image_urls = set()

# <img> images
for img in soup.find_all("img"):

    for attr in ["src", "data-src", "data-lazy-src"]:
        src = img.get(attr)

        if src:
            image_urls.add(urljoin(URL, src))

    # srcset
    srcset = img.get("srcset")

    if srcset:
        for item in srcset.split(","):
            src = item.strip().split(" ")[0]

            if src:
                image_urls.add(urljoin(URL, src))


print(f"\nFound {len(image_urls)} images.\n")

extensions = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
    "image/svg+xml": ".svg",
    "image/avif": ".avif"
}

used_names = set()

for i, image_url in enumerate(image_urls, 1):

    try:

        r = requests.get(
            image_url,
            headers=headers,
            timeout=20
        )

        r.raise_for_status()

        content_type = r.headers.get(
            "Content-Type",
            ""
        ).split(";")[0].lower()

        if not content_type.startswith("image/"):
            continue

        # Get original filename from URL
        path = urlparse(image_url).path

        filename = unquote(
            os.path.basename(path)
        )

        # If URL doesn't contain filename
        if not filename or "." not in filename:

            extension = extensions.get(
                content_type,
                ".img"
            )

            filename = f"image_{i:03d}{extension}"

        # Remove unsafe characters
        filename = re.sub(
            r'[<>:"/\\|?*]',
            "_",
            filename
        )

        # Prevent duplicate filenames
        original_filename = filename
        counter = 1

        while filename.lower() in used_names:

            name, ext = os.path.splitext(
                original_filename
            )

            filename = f"{name}_{counter}{ext}"

            counter += 1

        used_names.add(filename.lower())

        filepath = os.path.join(
            OUTPUT_DIR,
            filename
        )

        with open(filepath, "wb") as f:
            f.write(r.content)

        print(f"[✓] {filename}")

    except Exception as e:

        print(
            f"[✗] Failed: {image_url}"
        )

print("\nDone!")
print("Images saved in:", OUTPUT_DIR)