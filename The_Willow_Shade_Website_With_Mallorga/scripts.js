
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});
