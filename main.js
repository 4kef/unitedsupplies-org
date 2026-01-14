// Main JavaScript for Luxe Pools

// Function to handle WhatsApp redirection
function getQuotation(productName) {
    // Replace with the actual business phone number
    // Format: CountryCodePhoneNumber (e.g., 15551234567)
    const phoneNumber = "919981425205";

    const message = `Hello, I am interested in getting a quotation for the ${productName}.`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(13, 37, 63, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        // Reset to original state (transparent on home, solid on products)
        if (window.location.pathname.includes('products.html')) {
            header.style.background = 'var(--primary-color)';
            header.style.boxShadow = 'none';
        } else {
            header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)';
            header.style.boxShadow = 'none';
        }
    }
});

// Simple mobile helper (if we added a hamburger menu later)
console.log('Luxe Pools loaded successfully.');

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
});
