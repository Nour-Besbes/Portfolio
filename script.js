
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items, cards, etc.
        document.querySelectorAll('.timeline-item, .experience-card, .skill-category, .project-card, .cert-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        // Dynamic year in footer
        document.addEventListener('DOMContentLoaded', () => {
            const year = new Date().getFullYear();
            const footerYear = document.querySelector('footer p:last-child');
            if (footerYear) {
                footerYear.textContent = `© ${year} Nour Besbes. Tous droits réservés.`;
            }
        });

        // Add hover effect on stats
        document.querySelectorAll('.stat-item').forEach(stat => {
            stat.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            stat.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
 