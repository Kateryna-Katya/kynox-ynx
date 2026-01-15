document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Эффект слежения прожектора (Spotlight)
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            hero.style.setProperty('--mouse-x', `${x}%`);
            hero.style.setProperty('--mouse-y', `${y}%`);
        });
    }

    // 2. Появление контента при загрузке (Vanilla Reveal)
    const heroContent = document.querySelector('.hero__content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);

    // 3. Scroll Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('header--scrolled', window.scrollY > 50);
    });
});