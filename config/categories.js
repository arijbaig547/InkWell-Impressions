document.addEventListener("DOMContentLoaded", () => {
      // ----- CUSTOM CURSOR -----
      const cursor = document.getElementById('cursor');
      document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power1.out' });
      });
      document.querySelectorAll('button, .nav-btn, .btn-luxury, a').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
      });

      // ----- SLIDER LOGIC -----
      const slides = document.querySelectorAll(".slide");
      const total = slides.length;
      const indicator = document.getElementById("current-slide");
      let current = 0;
      let isAnimating = false;

      // floating + rotation
      slides.forEach((slide) => {
        const render = slide.querySelector(".product-render");
        if (render) {
          gsap.to(render, {
            y: -18,
            rotationZ: 0.6,
            duration: 3.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
      });

      // premium parallax
      document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 24;
        const y = (e.clientY / window.innerHeight - 0.5) * 24;
        const active = slides[current];
        const render = active?.querySelector(".product-render");
        if (render) {
          gsap.to(render, {
            rotationY: x,
            rotationX: -y,
            duration: 1.8,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });

      // cinematic transition
      function goToSlide(index) {
        if (isAnimating || index === current) return;
        isAnimating = true;

        const cur = slides[current];
        const next = slides[index];
        const dir = index > current ? 1 : -1;

        const curText = cur.querySelector(".slide-text").children;
        const curVis = cur.querySelector(".product-render");
        const nextText = next.querySelector(".slide-text").children;
        const nextVis = next.querySelector(".product-render");

        gsap.set(next, { visibility: "visible", zIndex: 10, opacity: 1 });
        gsap.set(cur, { zIndex: 5 });

        gsap.set(nextVis, { opacity: 0, scale: 1.4, rotationY: dir * 50, z: 400 });
        gsap.set(nextText, { opacity: 0, y: 40, stagger: 0.1 });

        const tl = gsap.timeline({
          onComplete: () => {
            cur.classList.remove("active");
            next.classList.add("active");
            gsap.set(cur, { visibility: "hidden", opacity: 0 });
            current = index;
            indicator.textContent = `0${current + 1}`;
            isAnimating = false;
          },
        });

        tl.to(curText, { y: -40, opacity: 0, duration: 0.5, stagger: 0.06, ease: "power3.in" }, 0)
          .to(curVis, { opacity: 0, scale: 0.5, rotationY: dir * -50, z: -400, duration: 0.9, ease: "power3.inOut" }, 0)
          .to(cur, { opacity: 0, duration: 0.8, ease: "power2.inOut" }, 0.2)
          .to(nextVis, { opacity: 1, scale: 1, rotationY: 0, z: 0, duration: 1.3, ease: "power4.out" }, 0.5)
          .to(nextText, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" }, 0.7);
      }

      document.getElementById("btn-next").addEventListener("click", () => {
        let n = current + 1;
        if (n >= total) n = 0;
        goToSlide(n);
      });
      document.getElementById("btn-prev").addEventListener("click", () => {
        let p = current - 1;
        if (p < 0) p = total - 1;
        goToSlide(p);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") document.getElementById("btn-next").click();
        if (e.key === "ArrowLeft") document.getElementById("btn-prev").click();
      });

      // initial entrance
      const initText = slides[0].querySelector(".slide-text").children;
      const initVis = slides[0].querySelector(".product-render");
      gsap.from(initText, { y: 50, opacity: 0, duration: 1.2, stagger: 0.15, delay: 0.3, ease: "power4.out" });
      gsap.from(initVis, { scale: 1.2, rotationY: 18, opacity: 0, duration: 1.6, delay: 0.5, ease: "power3.out" });
    });