document.addEventListener('DOMContentLoaded', function() {
    // ===== HAMBURGER MENU =====
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const body = document.body;
    
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                body.style.overflow = 'hidden';
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-xmark');
            } else {
                mobileMenu.classList.add('hidden');
                body.style.overflow = '';
                hamburgerIcon.classList.remove('fa-xmark');
                hamburgerIcon.classList.add('fa-bars');
            }
        });
    }
    
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.add('hidden');
            body.style.overflow = '';
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            body.style.overflow = '';
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
        }
    });

    // ===== GSAP REGISTER PLUGIN =====
    gsap.registerPlugin(ScrollTrigger);

    // ===== HERO ANIMATIONS =====
    const heroTl = gsap.timeline();
    heroTl.from(".gs-hero-left > *", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" })
        .from(".gs-hero-center > div", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.6")
        .from(".gs-hero-right > *", { x: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.8");

    // ===== HERO CENTER BAG =====
    gsap.from(".hero-center-bag", {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.3
    });

    // ===== STATS ANIMATIONS =====
    gsap.from(".gs-stat", {
        scrollTrigger: { trigger: ".gs-stat", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
    });

    // ===== CATEGORIES ANIMATIONS =====
    gsap.from(".gs-category", {
        scrollTrigger: { trigger: ".gs-category", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
    });

    // ===== WHY CHOOSE US ANIMATIONS =====
    gsap.from(".gs-why-left > *", {
        scrollTrigger: { trigger: ".gs-why-left", start: "top 80%" },
        x: -40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
    });
    gsap.from(".gs-why-right", {
        scrollTrigger: { trigger: ".gs-why-right", start: "top 80%" },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
    });

    // ===== ABOUT ANIMATIONS =====
    gsap.from(".gs-about-img", {
        scrollTrigger: { trigger: ".gs-about-img", start: "top 80%" },
        x: -50, opacity: 0, duration: 1, ease: "power2.out"
    });
    gsap.from(".gs-about-text > *", {
        scrollTrigger: { trigger: ".gs-about-text", start: "top 80%" },
        x: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out"
    });

    // ===== CTA ANIMATION =====
    gsap.from(".gs-cta > *", {
        scrollTrigger: { trigger: ".gs-cta", start: "top 90%" },
        y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
    });

    // ============================================================
    // ===== REVIEWS AUTO-SLIDER - 4 INDIVIDUAL REVIEWS =====
    // ============================================================
    const track = document.getElementById('reviews-track');
    const slides = document.querySelectorAll('.review-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('reviews-prev');
    const nextBtn = document.getElementById('reviews-next');
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentIndex = index;
        
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-brand-red', i === currentIndex);
            dot.classList.toggle('bg-gray-300', i !== currentIndex);
        });
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    // Event Listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
            resetAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
            resetAutoSlide();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToSlide(index);
            resetAutoSlide();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoSlide();
        }
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoSlide();
        }
    });

    // Start auto-sliding
    autoSlideInterval = setInterval(nextSlide, 4000);

    // Pause on hover
    const carouselWrapper = track ? track.parentElement : null;
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', function() {
            clearInterval(autoSlideInterval);
        });
        carouselWrapper.addEventListener('mouseleave', function() {
            autoSlideInterval = setInterval(nextSlide, 4000);
        });
    }
});