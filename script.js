// Update script.js
// Add smooth page transitions
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add progress loader
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loading-bar');
    const simulateLoading = () => {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                document.querySelector('.loader').style.display = 'none';
            } else {
                width += 10;
                loader.style.width = width + '%';
            }
        }, 100);
    };
    simulateLoading();
});

// Add card hover effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    });
});
