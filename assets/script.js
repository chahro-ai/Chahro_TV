document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    // تفعيل أيقونات Feather
    feather.replace();

    // Theme Switcher (تغيير السمة)
    const themeBtns = document.querySelectorAll('.theme-btn');
    const body = document.body;
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            themeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if(btn.getAttribute('data-theme') === 'light') body.classList.add('light-theme');
            else body.classList.remove('light-theme');
        });
    });

    // Sidebar Toggle (القائمة الجانبية)
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sidebar = document.getElementById('sidebar');

    function toggleMenu() {
        body.classList.toggle('sidebar-open');
        sidebar.classList.toggle('active');
    }

    if(menuToggle) menuToggle.addEventListener('click', toggleMenu);
    if(sidebarOverlay) sidebarOverlay.addEventListener('click', toggleMenu);
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(body.classList.contains('sidebar-open')) toggleMenu();
        });
    });

    // Video Toggle Logic (منطق الفيديو)
    const videoBtn = document.getElementById('toggle-video-btn');
    const videoContent = document.getElementById('video-content');
    const videoEl = document.getElementById('activation-video');

    if(videoBtn && videoContent) {
        videoBtn.addEventListener('click', () => {
            const isHidden = !videoContent.classList.contains('show');
            
            if(isHidden) {
                // Show video
                videoContent.classList.add('show');
                videoBtn.classList.add('active');
            } else {
                // Hide video
                videoContent.classList.remove('show');
                videoBtn.classList.remove('active');
                if(videoEl) videoEl.pause(); // Pause video when hidden
            }
        });
    }

    // Header Text Animation (حركة النص في الرأس)
    const textElement = document.getElementById('header-dynamic-text');
    const textArray = ["Chahro TV", "Android", "Smart TV", "قنوات مجانية حصرية", "VIP باقات حصرية"];
    let textIndex = 0;
    
    if(textElement) {
        textElement.classList.add('visible');
        setInterval(() => {
            textElement.classList.remove('visible');
            setTimeout(() => {
                textIndex = (textIndex + 1) % textArray.length;
                textElement.textContent = textArray[textIndex];
                textElement.classList.add('visible');
            }, 500);
        }, 3000);
    }

    // Scroll Animation (حركة عند التمرير)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-section').forEach(s => observer.observe(s));

    // Stats Counter (عداد الإحصائيات)
    const activeUsersEl = document.getElementById('active-users-stat');
    if (activeUsersEl) {
        let count = 115;
        setInterval(() => {
            count = Math.max(80, count + (Math.floor(Math.random() * 11) - 5));
            activeUsersEl.textContent = count;
        }, 3000);
    }

    // Back to top button (زر العودة للأعلى)
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) backToTopBtn.classList.add('visible');
            else backToTopBtn.classList.remove('visible');
        });
    }

    // Tilt Effect (تأثير الميلان للكروت)
    if(typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".feature-card"), { max: 10, speed: 400, glare: true, "max-glare": 0.2 });
    }
});