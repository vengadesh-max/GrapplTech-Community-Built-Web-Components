// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and other functions
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    const successMessage = document.getElementById('success-message');

    // Character counter for message input
    messageInput.addEventListener('input', () => {
        const remaining = 500 - messageInput.value.length;
        charCount.textContent = `${remaining} characters remaining`;
    });

    // Real-time validation feedback
    nameInput.addEventListener('input', () => {
        validateInput(nameInput, nameInput.value.trim() !== '');
    });

    emailInput.addEventListener('input', () => {
        validateInput(emailInput, validateEmail(emailInput.value.trim()));
    });

    messageInput.addEventListener('input', () => {
        validateInput(messageInput, messageInput.value.trim() !== '');
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        if (!validateForm()) {
            alert('Please correct the errors in the form');
        } else {
            sendEmail(e);
        }
    });

    function validateForm() {
        const isNameValid = nameInput.value.trim() !== '';
        const isEmailValid = validateEmail(emailInput.value.trim());
        const isMessageValid = messageInput.value.trim() !== '';

        validateInput(nameInput, isNameValid);
        validateInput(emailInput, isEmailValid);
        validateInput(messageInput, isMessageValid);

        return isNameValid && isEmailValid && isMessageValid;
    }

    function validateInput(input, isValid) {
        if (isValid) {
            input.style.borderColor = 'green';
        } else {
            input.style.borderColor = 'red';
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

function sendEmail(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
        .then(() => {
            document.getElementById('success-message').style.display = 'block';
            form.reset();
            document.getElementById('char-count').textContent = '500 characters remaining';
        }, (error) => {
            alert('Failed to send email. Please try again later.');
            console.error('Failed to send email:', error);
        });
}
