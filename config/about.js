document.addEventListener('DOMContentLoaded', function () {
      gsap.registerPlugin(ScrollTrigger);

      const ease = 'power2.out';

      // ---------- 1. Fade-up for intro ----------
      const fadeEls = document.querySelectorAll('.gsap-fade-up');
      if (fadeEls.length) {
        gsap.fromTo(fadeEls, {opacity: 0, y: 20}, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: ease,
          scrollTrigger: {trigger: fadeEls[0], start: 'top 88%', toggleActions: 'play none none none'}
        });
      }

      // ---------- 2. Features container ----------
      const featContainer = document.querySelector('.gsap-features');
      if (featContainer) {
        gsap.fromTo(featContainer, {opacity: 0, y: 16}, {
          opacity: 1, y: 0, duration: 0.7, ease: ease,
          scrollTrigger: {trigger: featContainer, start: 'top 90%', toggleActions: 'play none none none'}
        });
      }

      // ---------- 3. Individual feature items stagger ----------
      const featItems = document.querySelectorAll('.feature-item');
      if (featItems.length) {
        gsap.fromTo(featItems, {opacity: 0, y: 10}, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: ease,
          scrollTrigger: {trigger: featItems[0], start: 'top 92%', toggleActions: 'play none none none'}
        });
      }

      // ---------- 4. Stats container (gsap-stats) ----------
      const statsContainer = document.querySelector('.gsap-stats');
      if (statsContainer) {
        gsap.fromTo(statsContainer, {opacity: 0, y: 16}, {
          opacity: 1, y: 0, duration: 0.7, ease: ease,
          scrollTrigger: {trigger: statsContainer, start: 'top 90%', toggleActions: 'play none none none'}
        });
      }

      // ---------- 5. Stat cards: fade + slide + counter ----------
      const statCards = document.querySelectorAll('.stat-card');
      if (statCards.length) {
        // first, reveal each card with stagger
        gsap.fromTo(statCards, {opacity: 0, y: 20}, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: ease,
          scrollTrigger: {
            trigger: statCards[0],
            start: 'top 90%',
            toggleActions: 'play none none none',
            // once revealed, trigger counter
            onEnter: () => {
              statCards.forEach(card => {
                const numSpan = card.querySelector('.counter-num');
                if (!numSpan) return;
                const target = parseInt(card.getAttribute('data-count'), 10);
                if (isNaN(target)) return;
                // only count once
                if (card.dataset.counted === 'true') return;
                card.dataset.counted = 'true';

                // GSAP counter animation
                gsap.fromTo(numSpan, {innerText: 0}, {
                  innerText: target,
                  duration: 1.4,
                  ease: 'power2.out',
                  snap: {innerText: 1},
                  onUpdate: function () {
                    numSpan.innerText = Math.floor(parseFloat(numSpan.innerText));
                  }
                });
              });
            },
            // prevent re-trigger
            once: true
          }
        });
      }

      // ---------- 6. Trust badge (safely guard) ----------
      const trust = document.querySelector('.gsap-trust');
      if (trust) {
        gsap.fromTo(trust, {opacity: 0, y: 14}, {
          opacity: 1, y: 0, duration: 0.6, ease: ease,
          scrollTrigger: {trigger: trust, start: 'top 92%', toggleActions: 'play none none none'}
        });
      }

      // ---------- 7. Additional: Story/Mission/Vision cards stagger (already part of gsap-fade-up, but we add a subtle extra stagger) ----------
      const storyCards = document.querySelectorAll('.story-mission-card');
      if (storyCards.length && !document.querySelector('.gsap-fade-up')) {
        // only if not already handled by fade-up
        gsap.fromTo(storyCards, {opacity: 0, y: 15}, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: ease,
          scrollTrigger: {trigger: storyCards[0], start: 'top 88%', toggleActions: 'play none none none'}
        });
      }

    });