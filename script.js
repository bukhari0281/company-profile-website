// ========================================
// JAVASCRIPT - INTERAKTIVITAS & OPTIMASI PERFORMA
// WebPro Batam
// ========================================

// ========== SMOOTH SCROLL UNTUK NAVBAR ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Skip jika hanya "#"
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Tutup mobile menu jika sedang terbuka
            const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (hamburger) {
                        hamburger.classList.remove('active');
                        hamburger.setAttribute('aria-expanded', 'false');
                        hamburger.setAttribute('aria-label', 'Buka Menu Navigasi');
                    }
                }
            }
        });
});

// ========== MOBILE MENU TOGGLE (A11Y & RESPONSIF) ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    const toggleMenu = () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        hamburger.setAttribute('aria-label', isActive ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi');
    };

    hamburger.addEventListener('click', toggleMenu);

    // Dukungan navigasi keyboard (Enter / Space)
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Tutup menu otomatis jika window di-resize ke ukuran desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Buka Menu Navigasi');
        }
    }, { passive: true });
}

// ========== FORM SUBMISSION HANDLER (CRO & VALIDASI KETAT) ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    // Helper fungsi untuk menampilkan pesan error di bawah input
    const showFieldError = (fieldId, message) => {
        const input = document.getElementById(fieldId);
        const errorEl = document.getElementById(fieldId + 'Error');
        if (input) {
            input.style.borderColor = '#ff6b6b';
            input.style.backgroundColor = 'rgba(255, 107, 107, 0.15)';
        }
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.style.display = 'block';
        }
    };

    // Helper fungsi untuk menghapus status error
    const clearFieldError = (fieldId) => {
        const input = document.getElementById(fieldId);
        const errorEl = document.getElementById(fieldId + 'Error');
        if (input) {
            input.style.borderColor = '';
            input.style.backgroundColor = '';
        }
        if (errorEl) {
            errorEl.textContent = '';
            errorEl.style.display = 'none';
        }
    };

    // Bersihkan error saat pengguna mulai mengetik atau mengubah pilihan
    ['name', 'email', 'phone', 'service', 'message'].forEach(fieldId => {
        const input = document.getElementById(fieldId);
        if (input) {
            input.addEventListener('input', () => clearFieldError(fieldId));
            input.addEventListener('change', () => clearFieldError(fieldId));
        }
    });

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let hasError = false;
        let firstInvalidField = null;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const serviceInput = document.getElementById('service');
        const messageInput = document.getElementById('message');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const service = serviceInput ? serviceInput.value : '';
        const serviceText = (serviceInput && serviceInput.selectedIndex >= 0)
            ? serviceInput.options[serviceInput.selectedIndex].text
            : service;
        const message = messageInput ? messageInput.value.trim() : '';

        // Reset semua status error sebelumnya
        ['name', 'email', 'phone', 'service', 'message'].forEach(clearFieldError);

        // 1. Validasi Nama
        if (!name) {
            showFieldError('name', 'Nama lengkap wajib diisi');
            hasError = true;
            if (!firstInvalidField) firstInvalidField = nameInput;
        }

        // 2. Validasi Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showFieldError('email', 'Email wajib diisi');
            hasError = true;
            if (!firstInvalidField) firstInvalidField = emailInput;
        } else if (!emailRegex.test(email)) {
            showFieldError('email', 'Format email tidak valid (contoh: nama@email.com)');
            hasError = true;
            if (!firstInvalidField) firstInvalidField = emailInput;
        }

        // 3. Validasi Nomor Telepon / WhatsApp (10-15 digit)
        const cleanPhone = phone.replace(/\D/g, '');
        if (!phone) {
            showFieldError('phone', 'Nomor WhatsApp wajib diisi');
            hasError = true;
            if (!firstInvalidField) firstInvalidField = phoneInput;
        } else if (cleanPhone.length < 10 || cleanPhone.length > 15) {
            showFieldError('phone', 'Nomor WhatsApp harus 10-15 digit angka');
            hasError = true;
            if (!firstInvalidField) firstInvalidField = phoneInput;
        }

        // 4. Validasi Pilihan Layanan
        if (!service) {
            showFieldError('service', 'Silakan pilih salah satu layanan');
            hasError = true;
            if (!firstInvalidField) firstInvalidField = serviceInput;
        }

        // 5. Validasi Pesan
        if (!message) {
            showFieldError('message', 'Pesan tidak boleh kosong');
            hasError = true;
            if (!firstInvalidField) firstInvalidField = messageInput;
        }

        // Jika terdapat error, hentikan submit & fokuskan ke field pertama yang bermasalah
        if (hasError) {
            showAlert('Mohon periksa kembali kolom yang bertanda merah', 'error');
            if (firstInvalidField) firstInvalidField.focus();
            return;
        }

        // Format pesan pre-filled WhatsApp yang rapi dan profesional
        const whatsappMessage = 'Halo WebPro Batam, saya ingin konsultasi mengenai pembuatan website.\n\n' +
            '*Nama:* ' + name + '\n' +
            '*Email:* ' + email + '\n' +
            '*Nomor WA:* ' + phone + '\n' +
            '*Layanan:* ' + serviceText + '\n' +
            '*Pesan:* ' + message;
        const whatsappUrl = 'https://wa.me/6281234567890?text=' + encodeURIComponent(whatsappMessage);

        showAlert('Pesan terverifikasi! Mengarahkan ke WhatsApp WebPro Batam...', 'success');

        // Buka WhatsApp di tab baru secara aman
        setTimeout(() => {
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            contactForm.reset();
        }, 800);
    });
}

// ========== ALERT NOTIFICATION FUNCTION ==========
function showAlert(message, type) {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type}`;
    alertContainer.setAttribute('role', 'alert');
    alertContainer.innerHTML = message;

    alertContainer.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background-color: ${type === 'success' ? '#2e7d32' : '#d32f2f'};
        color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease-in-out;
        max-width: 320px;
        word-wrap: break-word;
        font-weight: 500;
        font-family: inherit;
    `;

    document.body.appendChild(alertContainer);

    setTimeout(() => {
        alertContainer.style.animation = 'slideOutRight 0.3s ease-in-out';
        setTimeout(() => {
            alertContainer.remove();
        }, 300);
    }, 4000);
}

// Injeksi keyframe animation alert jika belum ada
if (!document.getElementById('alert-styles')) {
    const alertStyle = document.createElement('style');
    alertStyle.id = 'alert-styles';
    alertStyle.textContent = `
        .nav-link.active {
            color: var(--primary-color);
            font-weight: 600;
        }
        .nav-link.active::after {
            width: 100%;
        }
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100px); }
        }
    `;
    document.head.appendChild(alertStyle);
}

        // ========== THROTTLED SCROLL HANDLER (REQUEST ANIMATION FRAME) ==========
        // Menggabungkan navbar shadow, active link indicator, dan scroll-to-top dalam 1 handler ter-throttle
        let isScrollThrottled = false;
        const navbarElement = document.querySelector('.navbar');
        const pageSections = document.querySelectorAll('section');
        const navigationLinks = document.querySelectorAll('.nav-link');
        const scrollToTopButton = document.getElementById('scrollToTop');

        function handleScrollActions() {
            const scrollY = window.scrollY || window.pageYOffset;

            // 1. Efek shadow dinamis pada navbar
            if (navbarElement) {
                if (scrollY > 10) {
                    navbarElement.style.boxShadow = '0 2px 15px rgba(10, 36, 99, 0.15)';
                } else {
                    navbarElement.style.boxShadow = '0 2px 10px rgba(10, 36, 99, 0.1)';
                }
            }

        // 2. Active nav link indicator (Scroll Spy)
        let currentSectionId = '';
        pageSections.forEach(section => {
            const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 220) {
                    currentSectionId = section.getAttribute('id');
                }
            });

    if (currentSectionId) {
        navigationLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.slice(1) === currentSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // 3. Tombol Scroll to Top (jika ada)
    if (scrollToTopButton) {
        scrollToTopButton.style.display = scrollY > 300 ? 'block' : 'none';
    }

        isScrollThrottled = false;
    }

    window.addEventListener('scroll', () => {
        if (!isScrollThrottled) {
            window.requestAnimationFrame(handleScrollActions);
            isScrollThrottled = true;
        }
    }, { passive: true });

    // ========== LAZY LOADING IMAGES (INTERSECTION OBSERVER) ==========
    // Observer untuk lazy loading jika ada elemen yang menggunakan data-src
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        if (lazyImages.length > 0) {
            let remainingImages = lazyImages.length;
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                        remainingImages--;
                        if (remainingImages === 0) {
                            observer.disconnect();
                        }
                    }
                });
            });
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    // ========== INITIALIZE ANIMATIONS (PERFORMANCE OPTIMIZED) ==========
    // Fungsi untuk memicu animasi saat elemen masuk viewport dan disconnect observer setelah selesai
    function observeElements() {
        const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card');
        if (!animatedElements.length) return;

        if ('IntersectionObserver' in window) {
            let remainingElements = animatedElements.length;
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeIn 0.6s ease-in-out forwards';
                        observer.unobserve(entry.target);
                        remainingElements--;
                        if (remainingElements === 0) {
                            observer.disconnect();
                        }
                    }
                });
            }, observerOptions);

            animatedElements.forEach(el => observer.observe(el));
        } else {
            animatedElements.forEach(el => {
                el.style.opacity = '1';
            });
        }
    }

    // Jalankan observeElements ketika DOM loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeElements);
    } else {
        observeElements();
    }
