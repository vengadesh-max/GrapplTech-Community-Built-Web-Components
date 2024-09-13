// Simple interaction for CTA button
document.querySelector('.get-free-20gb-btn').addEventListener('click', function() {
    alert('Congratulations! You have been awarded 20GB of free cloud storage.');
});

// Smooth scroll to the next section
document.querySelector('.scroll-down a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
});

// Add interactivity to buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn').forEach(function(button) {
        button.addEventListener('click', function() {
            alert(`You clicked the "${button.textContent.trim()}" button!`);
        });
    });
});
