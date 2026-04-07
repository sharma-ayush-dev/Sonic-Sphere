// Add subtle micro-interactions to the page
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll for nav links if they point to an anchor
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`Navigation link clicked: ${this.getAttribute('href')}`);
        });
    });

    // Handle Spline container hover state for interactive feel
    const splinePlaceholder = document.querySelector('.spline-placeholder');
    if (splinePlaceholder) {
        splinePlaceholder.addEventListener('mouseenter', () => {
            splinePlaceholder.style.transform = 'scale(1.02)';
            splinePlaceholder.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        splinePlaceholder.addEventListener('mouseleave', () => {
            splinePlaceholder.style.transform = 'scale(1)';
        });
    }

    console.log("Music landing page loaded successfully. Ready for Spline integration.");
});
