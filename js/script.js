// Simple portfolio website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Simple fade-in animation for main content
    const mainContent = document.querySelector('.container');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add subtle animation to project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });

    // Console message for visitors
    console.log('👋 Hello there! Thanks for checking out the code.');
    console.log('This is a simple, classic portfolio website built with HTML, CSS, and vanilla JavaScript.');
    console.log('Feel free to reach out if you have any questions!');
    
});

// Simple utility function to get current year (if needed)
function getCurrentYear() {
    return new Date().getFullYear();
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Navigate with arrow keys (simple implementation)
    if (e.altKey) {
        const currentPath = window.location.pathname;
        const pages = ['index.html', 'about.html', 'projects.html', 'others.html'];
        let currentIndex = pages.findIndex(page => currentPath.includes(page.replace('.html', ''))) || 0;
        
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % pages.length;
            window.location.href = pages[nextIndex];
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
            window.location.href = pages[prevIndex];
        }
    }
});

// Prevent default behavior for placeholder links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href="#"]')) {
        e.preventDefault();
        console.log('This is a placeholder link. Add your actual URL here!');
    }
}); 