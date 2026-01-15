document.addEventListener('DOMContentLoaded', () => {
    
    // 0. Инициализация иконок Lucide
    lucide.createIcons();

    // 1. Мобильное меню
    const burger = document.querySelector('.burger');
    const closeMenu = document.querySelector('.mobile-overlay__close');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    const toggleMenu = (state) => {
        mobileOverlay.classList.toggle('active', state);
        document.body.style.overflow = state ? 'hidden' : '';
    };

    burger?.addEventListener('click', () => toggleMenu(true));
    closeMenu?.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

    // 2. Скролл хедер
    window.addEventListener('scroll', () => {
        document.querySelector('.header').classList.toggle('header--scrolled', window.scrollY > 50);
    });

    // 3. Hero Spotlight
    const hero = document.querySelector('.hero');
    hero?.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
        hero.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });

    // 4. Прогресс-бар блога
    const blogFeed = document.querySelector('.blog__feed');
    const progressBar = document.querySelector('.blog__progress-bar');
    blogFeed?.addEventListener('scroll', () => {
        const progress = (blogFeed.scrollLeft / (blogFeed.scrollWidth - blogFeed.clientWidth)) * 100;
        if (progressBar) progressBar.style.width = `${progress}%`;
    });

    // 5. Капча и форма
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    const result = n1 + n2;
    const captchaLabel = document.getElementById('captcha-question');
    if (captchaLabel) captchaLabel.textContent = `${n1} + ${n2} = ?`;

    const form = document.getElementById('careerForm');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const answer = parseInt(document.getElementById('captcha-answer').value);
        if (answer !== result) return alert('Ошибка капчи!');
        
        form.style.display = 'none';
        document.getElementById('successMessage').classList.add('active');
    });

    // 6. Cookie Popup
    const cookiePopup = document.getElementById('cookiePopup');
    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => { if (cookiePopup) cookiePopup.style.display = 'block'; }, 2000);
    }
    document.getElementById('acceptCookies')?.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        if (cookiePopup) cookiePopup.style.display = 'none';
    });
});