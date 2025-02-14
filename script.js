document.addEventListener('DOMContentLoaded', () => {
    // Flashcard functionality
    const flashcards = document.querySelectorAll('.flashcard');
    
    flashcards.forEach(flashcard => {
        flashcard.addEventListener('click', () => {
            flashcard.querySelector('.flashcard-inner').classList.toggle('flipped');
        });
    });

    // Quiz functionality
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            if (e.target.textContent === 'Thank you') {
                e.target.style.backgroundColor = '#4CAF50';
                e.target.style.color = 'white';
            } else {
                e.target.style.backgroundColor = '#ff4444';
                e.target.style.color = 'white';
            }
        });
    });

    // Navigation scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
