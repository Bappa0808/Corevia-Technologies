// EstateWebly - Premium JavaScript

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
const stickyCTA = document.getElementById('stickyCTA');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        stickyCTA.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        stickyCTA.classList.remove('visible');
    }
});

// ===========================
// Mobile Menu Toggle
// ===========================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===========================
// Animated Counter
// ===========================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// ===========================
// Intersection Observer for Counters
// ===========================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

// Observe all counter elements
document.querySelectorAll('.stat-number, .metric-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// FAQ Accordion
// ===========================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const wasActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!wasActive) {
            faqItem.classList.add('active');
        }
    });
});

// ===========================
// CRM Feature Panel Switching (Optional)
// ===========================
document.querySelectorAll('.crm-feature-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        document.querySelectorAll('.crm-feature-item').forEach(el => {
            el.classList.remove('active');
        });

        // Add active class to clicked item
        item.classList.add('active');

        // You can add logic here to switch dashboard panels
        // const panel = item.getAttribute('data-panel');
        // switchDashboardPanel(panel);
    });
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const projectType = formData.get('projectType');
    const budget = formData.get('budget');
    const message = formData.get('message') || 'No additional message';

    // Create email subject and body
    const subject = `New Inquiry from ${name} - ${projectType}`;
    const body = `
Name: ${name}
Phone: ${phone}
Email: ${email}
Project Type: ${projectType}
Budget Range: ${budget}

Message:
${message}

---
This inquiry was submitted through EstateWebly website contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:Estatewebly@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    showNotification('Opening your email client... Please send the email to submit your inquiry.', 'success');

    // Reset form after a short delay
    setTimeout(() => {
        contactForm.reset();
    }, 2000);
});

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' : 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease forwards;
    `;

    // Add to body
    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add notification animations to page
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
    }
    
    .notification-content i {
        font-size: 20px;
    }
`;
document.head.appendChild(style);

// ===========================
// Scroll Reveal Animations
// ===========================
const scrollRevealOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, scrollRevealOptions);

// Observe cards and sections for scroll reveal
document.querySelectorAll('.feature-card, .service-card, .case-card, .why-card, .testimonial-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollRevealObserver.observe(el);
});

// ===========================
// Parallax Effect for Hero Background
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg');

    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===========================
// Add Hover Effect to Service Cards
// ===========================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// Dynamic Year in Footer
// ===========================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText && footerText.textContent.includes('2026')) {
    footerText.textContent = footerText.textContent.replace('2026', currentYear);
}

// ===========================
// Form Field Validation Styles
// ===========================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value.trim() !== '') {
            this.style.borderColor = '#10B981';
        } else if (this.hasAttribute('required')) {
            this.style.borderColor = '#EF4444';
        }
    });

    input.addEventListener('focus', function () {
        this.style.borderColor = '#D4AF37';
    });
});

// ===========================
// Lazy Load Images
// ===========================
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Click outside to close mobile menu
// ===========================
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// ===========================
// Add Active State to Navigation
// ===========================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Prevent Form Resubmission
// ===========================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

console.log('%c EstateWebly Website Loaded Successfully! ', 'background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%); color: #0A0E1A; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Premium Real Estate Digital Solutions ', 'color: #D4AF37; font-size: 14px;');
