// Viraa Health Website - Minimal JavaScript
document.addEventListener('DOMContentLoaded', async function() {
    // Load app configuration
    try {
        const configResponse = await fetch('app-links.json');
        const config = await configResponse.json();
        
        // Update App Store link if needed
        const appStoreLink = document.querySelector('.app-store-link');
        if (appStoreLink && config.appStoreLink) {
            appStoreLink.href = config.appStoreLink;
        }
    } catch (error) {
        console.warn('Could not load app configuration:', error);
    }
    // Add subtle parallax effect to the gradient background
    const gradientBg = document.querySelector('.gradient-bg');
    
    if (gradientBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            gradientBg.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Add smooth reveal animation on load
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
        contentContainer.style.opacity = '0';
        contentContainer.style.transform = 'translateY(30px)';
        contentContainer.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        setTimeout(() => {
            contentContainer.style.opacity = '1';
            contentContainer.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add hover effect to app store button
    const appStoreLink = document.querySelector('.app-store-link');
    if (appStoreLink) {
        appStoreLink.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        appStoreLink.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
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