document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // Simple mobile menu placeholder
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        alert('Мобильное меню будет реализовано при финальной сборке!');
    });

    // Инициализация GSAP для будущих анимаций
    console.log('Kynox-Ynx Engine Ready');
});