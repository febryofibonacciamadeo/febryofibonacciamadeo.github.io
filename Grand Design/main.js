
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#001f3f',
                secondary: '#f9f9f9',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        }
    }
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        // Toggle accordion content
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// SWOT toggle functionality
const personalBtn = document.getElementById('personalBtn');
const semaBtn = document.getElementById('semaBtn');
const personalSwot = document.getElementById('personalSwot');
const semaSwot = document.getElementById('semaSwot');

personalBtn.addEventListener('click', () => {
    personalBtn.classList.add('bg-primary', 'text-white');
    personalBtn.classList.remove('bg-gray-200', 'text-gray-800');
    semaBtn.classList.add('bg-gray-200', 'text-gray-800');
    semaBtn.classList.remove('bg-primary', 'text-white');
    
    personalSwot.classList.add('active');
    semaSwot.classList.remove('active');
});

semaBtn.addEventListener('click', () => {
    semaBtn.classList.add('bg-primary', 'text-white');
    semaBtn.classList.remove('bg-gray-200', 'text-gray-800');
    personalBtn.classList.add('bg-gray-200', 'text-gray-800');
    personalBtn.classList.remove('bg-primary', 'text-white');
    
    semaSwot.classList.add('active');
    personalSwot.classList.remove('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Set initial active dot
    dots[0].classList.add('active');
    
    // Update carousel position
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    });
    
    // Previous slide
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    });
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel();
        });
    });
    
    // Auto-advance every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }, 5000);
});