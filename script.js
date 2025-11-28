/**
 * Main JavaScript for Rex S. Zalavarria's Website
 */

// Smooth scrolling for skip navigation link
document.addEventListener('DOMContentLoaded', function() {
    // Handle skip navigation smooth scroll
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Log website info to console
    console.log('%c Rex S. Zalavarria - Personal Website ', 'background: #0066cc; color: #fff; padding: 5px 10px; border-radius: 3px;');
    console.log('Fastest and Primitive Website!');
    console.log('GitHub Pages | Static HTML');

    // Display last visit timestamp
    displayLastVisit();

    // Add scroll-to-top functionality
    addScrollToTop();
});

/**
 * Display last visit information in console
 */
function displayLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toISOString();

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        console.log('Last visit:', lastVisitDate.toLocaleString());
    } else {
        console.log('Welcome! This is your first visit.');
    }

    // Store current visit
    localStorage.setItem('lastVisit', now);
}

/**
 * Add scroll to top functionality
 */
function addScrollToTop() {
    // Create scroll-to-top button (hidden by default)
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #0066cc;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transition: opacity 0.3s, transform 0.3s;
    `;

    document.body.appendChild(scrollButton);

    // Show button when scrolled down
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Export functions for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        displayLastVisit,
        addScrollToTop,
        prefersReducedMotion
    };
}
