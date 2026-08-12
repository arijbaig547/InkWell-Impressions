 const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburgerIcon = document.getElementById('hamburgerIcon');

        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Toggle icon between bars and X
            hamburgerIcon.classList.toggle('fa-bars');
            hamburgerIcon.classList.toggle('fa-xmark');
        });

        // Close menu when clicking a link (optional but better UX)
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.add('fa-bars');
                hamburgerIcon.classList.remove('fa-xmark');
            });
        });
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animations
        const heroTl = gsap.timeline();
        heroTl.from(".gs-hero-left > *", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" })
            .from(".gs-hero-center > div", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.6")
            .from(".gs-hero-right > *", { x: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.8");

        // Stats Animations
        gsap.from(".gs-stat", {
            scrollTrigger: { trigger: ".gs-stat", start: "top 85%" },
            y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
        });

        // Categories Animations
        gsap.from(".gs-category", {
            scrollTrigger: { trigger: ".gs-category", start: "top 80%" },
            y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
        });

        // Why Choose Us Animations
        gsap.from(".gs-why-left > *", {
            scrollTrigger: { trigger: ".gs-why-left", start: "top 80%" },
            x: -40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
        });
        gsap.from(".gs-why-right", {
            scrollTrigger: { trigger: ".gs-why-right", start: "top 80%" },
            y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
        });

        // About Animations
        gsap.from(".gs-about-img", {
            scrollTrigger: { trigger: ".gs-about-img", start: "top 80%" },
            x: -50, opacity: 0, duration: 1, ease: "power2.out"
        });
        gsap.from(".gs-about-text > *", {
            scrollTrigger: { trigger: ".gs-about-text", start: "top 80%" },
            x: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out"
        });

        // CTA Animation
        gsap.from(".gs-cta > *", {
            scrollTrigger: { trigger: ".gs-cta", start: "top 90%" },
            y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
        });
        // gsap.from(".hero-center-bag", {
        //     y: 50,
        //     scale: 0.8,
        //     opacity: 0,
        //     duration: 0.5,
        //     ease: "back.out(1.7)"
        // }, "-=0.6")
        gsap.from(".hero-center-bag", {
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 1.5,
            ease: "expo.out",
            delay: 0.3
        });

       document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.review-card');
    const prevBtn = document.getElementById('reviews-prev');
    const nextBtn = document.getElementById('reviews-next');
    let currentPage = 0;
    const cardsPerPage = 2;
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    function showPage(page) {
        // Hide all cards with animation
        cards.forEach((card, index) => {
            const shouldShow = index >= page * cardsPerPage && index < (page + 1) * cardsPerPage;
            
            if (shouldShow) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px) scale(0.95)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, 50 + (index % cardsPerPage) * 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(-10px) scale(0.95)';
                
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });

        currentPage = page;
    }

    function nextPage() {
        const next = (currentPage + 1) % totalPages;
        showPage(next);
    }

    function prevPage() {
        const prev = (currentPage - 1 + totalPages) % totalPages;
        showPage(prev);
    }

    // Event listeners with smooth transitions
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        nextPage();
    });

    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        prevPage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') prevPage();
    });

    // Initialize
    showPage(0);
});

        // Industries Animation
        // gsap.from(".gs-industries > div > div", {
        //     scrollTrigger: { trigger: ".gs-industries", start: "top 85%" },
        //     y: 20, opacity: 0, duration: 0.5, stagger: 0.05, ease: "power1.out"
        // });