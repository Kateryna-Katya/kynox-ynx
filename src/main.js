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
    // Внутри DOMContentLoaded добавим Intersection Observer для анимации появления секции
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

const stepsSection = document.querySelector('.steps');
if (stepsSection) {
    observer.observe(stepsSection);
    }
    // Логика для секции инноваций
const features = document.querySelectorAll('.feature-item');
const radarScanner = document.querySelector('.radar__scanner');

features.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Замедляем и подсвечиваем сканер при наведении на фичу
        radarScanner.style.animationPlayState = 'paused';
        radarScanner.style.filter = 'brightness(2) blur(2px)';
    });

    item.addEventListener('mouseleave', () => {
        radarScanner.style.animationPlayState = 'running';
        radarScanner.style.filter = 'none';
    });
});
    // Логика прогресс-бара для блога
const blogFeed = document.querySelector('.blog__feed');
const progressBar = document.querySelector('.blog__progress-bar');

if (blogFeed && progressBar) {
    blogFeed.addEventListener('scroll', () => {
        const scrollTotal = blogFeed.scrollWidth - blogFeed.clientWidth;
        const scrollLeft = blogFeed.scrollLeft;
        const progress = (scrollLeft / scrollTotal) * 100;
        progressBar.style.width = progress + '%';
    });
    }
    // --- FORM LOGIC ---

// 1. Генерация Капчи
const captchaQuest = document.getElementById('captcha-question');
const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
const correctAnswer = num1 + num2;

if (captchaQuest) {
    captchaQuest.textContent = `${num1} + ${num2} = ?`;
}

// 2. Валидация телефона (только цифры)
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9+]/g, '');
});

// 3. Обработка отправки
const form = document.getElementById('careerForm');
const successUI = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userAnswer = parseInt(document.getElementById('captcha-answer').value);

    if (userAnswer !== correctAnswer) {
        alert('Ошибка в капче! Попробуйте еще раз.');
        return;
    }

    // Имитация AJAX
    const submitBtn = form.querySelector('.btn--submit');
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;

    setTimeout(() => {
        form.style.display = 'none';
        successUI.classList.add('active');
        
        // Скролл к началу формы, если нужно
        successUI.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1500);
});
});