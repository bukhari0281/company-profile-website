// ========================================
// JAVASCRIPT - INTERAKTIVITAS & SMOOTH SCROLL
// ========================================

// ========== SMOOTH SCROLL UNTUK NAVBAR ==========
// Fungsi untuk smooth scroll ketika user klik menu navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Skip jika hanya "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Smooth scroll ke element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Tutup mobile menu jika terbuka
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            }
        }
    });
});

// ========== MOBILE MENU TOGGLE ==========
// Fungsi untuk toggle hamburger menu di mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu ketika window di-resize ke desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========== FORM SUBMISSION HANDLER ==========
// Fungsi untuk handle form submission dengan validasi
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Ambil nilai dari form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    // Validasi form
    if (!name || !email || !phone || !service || !message) {
        showAlert('Mohon lengkapi semua field', 'error');
        return;
    }
    
    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert('Mohon masukkan email yang valid', 'error');
        return;
    }
    
    // Validasi nomor telepon (minimal 10 digit)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        showAlert('Nomor WhatsApp harus minimal 10 digit', 'error');
        return;
    }
    
    // Jika validasi berhasil
    // Option 1: Kirim ke WhatsApp
    const whatsappMessage = `Halo, saya ${name}. Email saya: ${email}. Nomor WA: ${phone}. Saya tertarik dengan layanan: ${service}. Pesan: ${message}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Option 2: Tampilkan success message (comment out jika ingin redirect ke WA)
    showAlert('Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Uncomment baris di bawah untuk redirect ke WhatsApp setelah submit
    // setTimeout(() => {
    //     window.open(whatsappUrl, '_blank');
    // }, 1000);
});

// ========== ALERT NOTIFICATION FUNCTION ==========
// Fungsi untuk menampilkan alert notification
function showAlert(message, type) {
    // Buat container alert
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type}`;
    alertContainer.innerHTML = message;
    
    // Styling alert
    alertContainer.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease-in-out;
        max-width: 300px;
        word-wrap: break-word;
        font-weight: 500;
    `;
    
    document.body.appendChild(alertContainer);
    
    // Hapus alert setelah 4 detik
    setTimeout(() => {
        alertContainer.style.animation = 'slideOutRight 0.3s ease-in-out';
        setTimeout(() => {
            alertContainer.remove();
        }, 300);
    }, 4000);
}

// ========== NAVBAR SHADOW EFFECT ==========
// Fungsi untuk menambah shadow di navbar ketika page di-scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 2px 15px rgba(10, 36, 99, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(10, 36, 99, 0.1)';
    }
});

// ========== ACTIVE NAV LINK INDICATOR ==========
// Fungsi untuk menunjukkan active section di navbar
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// CSS untuk active link (tambahkan ke style.css jika belum ada)
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        font-weight: 600;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    /* Animation untuk alert */
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ========== SCROLL TO TOP BUTTON ==========
// Fungsi untuk scroll to top button (optional)
function showScrollToTopButton() {
    const scrollButton = document.getElementById('scrollToTop');
    
    // Jika sudah scroll lebih dari 300px, tampilkan button
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (scrollButton) scrollButton.style.display = 'block';
    } else {
        if (scrollButton) scrollButton.style.display = 'none';
    }
}

// Listen scroll event
window.addEventListener('scroll', showScrollToTopButton);

// ========== LAZY LOADING IMAGES ==========
// Fungsi untuk lazy load images (meningkatkan performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ========== INITIALIZE ANIMATIONS ==========
// Fungsi untuk menambah animation class ke elements ketika masuk viewport
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe service cards dan portfolio items
    document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Jalankan observeElements ketika DOM loaded
document.addEventListener('DOMContentLoaded', observeElements);

// ========== CONSOLE LOG FOR DEVELOPMENT ==========
console.log('WebStudio Batam Website - JavaScript loaded successfully');
console.log('Fitur: Smooth Scroll, Mobile Menu, Form Validation, Lazy Loading');
