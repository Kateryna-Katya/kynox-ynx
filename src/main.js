document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. МОБИЛЬНОЕ МЕНЮ ---
    const burger = document.querySelector('.burger');
    const closeMenu = document.querySelector('.mobile-overlay__close');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    const toggleMenu = (state) => {
        mobileOverlay.classList.toggle('active', state);
        document.body.style.overflow = state ? 'hidden' : '';
    };

    burger.addEventListener('click', () => toggleMenu(true));
    closeMenu.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));


    // --- 2. ЭФФЕКТЫ СКРОЛЛА (HEADER & REVEAL) ---
    const header = document.querySelector('.header');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Если это секция шагов, можно запустить доп. анимацию
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));

    window.addEventListener('scroll', () => {
        header.classList.toggle('header--scrolled', window.scrollY > 50);
    });


    // --- 3. HERO SPOTLIGHT ---
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


    // --- 4. БЛОГ: PROGRESS BAR ---
    const blogFeed = document.querySelector('.blog__feed');
    const progressBar = document.querySelector('.blog__progress-bar');

    if (blogFeed && progressBar) {
        blogFeed.addEventListener('scroll', () => {
            const scrollTotal = blogFeed.scrollWidth - blogFeed.clientWidth;
            const progress = (blogFeed.scrollLeft / scrollTotal) * 100;
            progressBar.style.width = `${progress}%`;
        });
    }


    // --- 5. КОНТАКТНАЯ ФОРМА & КАПЧА ---
    const captchaLabel = document.getElementById('captcha-question');
    const phoneInput = document.getElementById('phone');
    const form = document.getElementById('careerForm');

    if (form) {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        const result = n1 + n2;
        if (captchaLabel) captchaLabel.textContent = `${n1} + ${n2} = ?`;

        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9+]/g, '');
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const answer = parseInt(document.getElementById('captcha-answer').value);
            if (answer !== result) {
                alert('Неверный ответ капчи!');
                return;
            }
            
            const btn = form.querySelector('.btn--submit');
            btn.textContent = 'Отправка...';
            btn.disabled = true;

            setTimeout(() => {
                form.style.display = 'none';
                document.getElementById('successMessage').classList.add('active');
            }, 1500);
        });
    }


    // --- 6. COOKIE POPUP LOGIC ---
    const cookiePopup = document.getElementById('cookiePopup');
    const acceptBtn = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => {
            cookiePopup.classList.add('active');
        }, 2000);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookiePopup.classList.remove('active');
    });
});