// Theme settings (light and dark)
const themes = {
    light: {
        background: '#F7F7FF',
        text: '#2A2A2A',
        primary: '#7C83FD'
    },
    dark: {
        background: '#1A1A1A',
        text: '#F7F7FF',
        primary: '#96BAFF'
    }
};

// User preferences, theme can be 'light' or 'dark'
const userPreferences = {
    theme: 'light', // Default theme
    notifications: true,
    language: 'en'
};

// Function to apply the current theme
const applyTheme = (theme) => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', themes[theme].background);
    root.style.setProperty('--text-color', themes[theme].text);
    root.style.setProperty('--primary-color', themes[theme].primary);
};

// Apply user selected theme when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Apply the user's preferred theme
    applyTheme(userPreferences.theme);

    // Update active navbar link based on current page
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle theme toggle button click
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            userPreferences.theme = userPreferences.theme === 'light' ? 'dark' : 'light';
            applyTheme(userPreferences.theme);
        });
    }
});

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Add event listener for scroll to trigger animations
window.addEventListener('scroll', animateOnScroll);

// Hamburger menu functionality for mobile
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}
