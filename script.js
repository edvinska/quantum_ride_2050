// Quantum Forge 2050 - Neural Interactive Script

document.addEventListener('DOMContentLoaded', function() {
    // Neural link navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Holographic emergence animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('neural-activate');
            }
        });
    }, observerOptions);

    // Activate neural models
    const modelCards = document.querySelectorAll('.model-card');
    modelCards.forEach(card => {
        observer.observe(card);
    });

    // Activate quantum sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Inject neural CSS
    const style = document.createElement('style');
    style.textContent = `
        .neural-activate {
            animation: quantumFadeIn 1.2s ease-out forwards;
        }

        @keyframes quantumFadeIn {
            from {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
                filter: blur(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }

        .model-card {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
            filter: blur(10px);
            transition: all 1.2s ease;
        }

        .model-card.neural-activate {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
        }

        section {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
            filter: blur(10px);
            transition: all 1.2s ease;
        }

        section.neural-activate {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
        }

        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ffff;
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat 6s infinite linear;
        }

        @keyframes particleFloat {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Quantum transmission form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Transmitting...';
            submitButton.disabled = true;
            submitButton.style.boxShadow = '0 0 30px rgba(0, 255, 255, 1)';

            setTimeout(() => {
                submitButton.textContent = 'Transmission Complete';
                submitButton.style.backgroundColor = '#00ff00';
                submitButton.style.color = '#000011';
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.backgroundColor = '';
                    submitButton.style.color = '';
                    submitButton.style.boxShadow = '';
                    contactForm.reset();
                }, 3000);
            }, 2000);
        });
    }

    // Dimensional parallax
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.01}deg)`;
        }
    });

    // Neural hover responses
    modelCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05) rotate(1deg)';
            this.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.4)';
            this.style.borderColor = '#ff00ff';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            this.style.boxShadow = '';
            this.style.borderColor = '';
        });
    });

    // Quantum particle field
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 6 + 's';
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 6000);
    }

    // Generate particles periodically
    setInterval(createParticle, 200);

    // Initial particle burst
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 100);
    }
});