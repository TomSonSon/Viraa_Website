// Viraa Health Website - Enhanced JavaScript for Both Versions
document.addEventListener('DOMContentLoaded', async function() {
    // Detect which version we're on
    const isModernSaaS = document.querySelector('.hero-section .hero-container');
    const isMinimalApple = document.querySelector('.hero-section .hero-content');
    
    // Load app configuration
    try {
        const configResponse = await fetch('app-links.json');
        const config = await configResponse.json();
        
        // Update App Store links if needed
        const appStoreLinks = document.querySelectorAll('.app-store-link');
        appStoreLinks.forEach(link => {
            if (config.appStoreLink) {
                link.href = config.appStoreLink;
            }
        });
    } catch (error) {
        console.warn('Could not load app configuration:', error);
    }
    
    // Enhanced gradient background with responsive height
    const gradientBg = document.querySelector('.gradient-bg');
    if (gradientBg) {
        // Set background height to cover content without causing scroll feedback
        function updateBackgroundHeight() {
            // Get the height of the main content, not the entire document
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                const contentHeight = mainContent.offsetHeight;
                gradientBg.style.height = `${contentHeight}px`;
                gradientBg.style.minHeight = `${contentHeight}px`;
            } else {
                // Fallback: use viewport height + a reasonable buffer
                const viewportHeight = window.innerHeight;
                gradientBg.style.height = `${viewportHeight * 2}px`;
                gradientBg.style.minHeight = `${viewportHeight * 2}px`;
            }
        }
        
        // Initial calculation
        updateBackgroundHeight();
        
        // Slower animation for minimal Apple version
        if (isMinimalApple && !isModernSaaS) {
            gradientBg.style.animationDuration = '30s';
        }
        
        // Parallax effect for modern SaaS version
        if (isModernSaaS) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.3;
                gradientBg.style.transform = `translateY(${parallax}px)`;
            });
        }
        
        // Handle window resize to update background height
        window.addEventListener('resize', updateBackgroundHeight);
        
        // Also update on content changes (like dynamic content loading)
        const observer = new MutationObserver(updateBackgroundHeight);
        observer.observe(document.body, { childList: true, subtree: true });
    }
    
    // Enhanced reveal animations
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(40px)';
        heroSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Modern SaaS: Value proposition strip animation
    const valuePropStrip = document.querySelector('.value-prop-strip');
    if (valuePropStrip) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.value-prop-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }
            });
        }, observerOptions);
        
        observer.observe(valuePropStrip);
        
        // Set initial state
        const items = valuePropStrip.querySelectorAll('.value-prop-item');
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
    }
    
    // Enhanced feature cards animation - all cards animate together
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate all cards at once when any card comes into view
                    featureCards.forEach(card => {
                        card.classList.add('fade-in');
                    });
                }
            });
        }, observerOptions);
        
        // Observe the features section container instead of individual cards
        const featuresSection = document.querySelector('.features-section');
        if (featuresSection) {
            observer.observe(featuresSection);
        }
    }
    
    // Modern SaaS: Feature showcase animations
    const featureShowcaseItems = document.querySelectorAll('.feature-showcase-item');
    if (featureShowcaseItems.length > 0) {
        const observerOptions = {
            threshold: 0.3,
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
        
        featureShowcaseItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(item);
        });
    }
    
    // Enhanced app store button interactions
    const appStoreLinks = document.querySelectorAll('.app-store-link');
    appStoreLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click tracking (placeholder for analytics)
        link.addEventListener('click', function() {
            console.log('App Store link clicked:', this.href);
            // Here you would integrate with your analytics
        });
    });
    
    // Minimal Apple: iPhone mockup hover effects
    const iphoneMockup = document.querySelector('.iphone-mockup');
    if (iphoneMockup && isMinimalApple) {
        iphoneMockup.addEventListener('mouseenter', function() {
            this.style.transform = 'rotateY(-2deg) rotateX(2deg) scale(1.02)';
        });
        
        iphoneMockup.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateY(-5deg) rotateX(5deg) scale(1)';
        });
    }
    
    // Social proof section animation (Modern SaaS)
    const socialProof = document.querySelector('.social-proof');
    if (socialProof) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stats = entry.target.querySelectorAll('.stat-item');
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.opacity = '1';
                            stat.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }
            });
        }, observerOptions);
        
        observer.observe(socialProof);
        
        // Set initial state
        const stats = socialProof.querySelectorAll('.stat-item');
        stats.forEach(stat => {
            stat.style.opacity = '0';
            stat.style.transform = 'translateY(30px)';
            stat.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
    }
    
    // Smooth scroll behavior for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
    
    // Performance optimization: Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-animations');
    }
});

// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}