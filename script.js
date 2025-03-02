// Show Contact Information
document.getElementById('contact-btn').addEventListener('click', function () {
    let contactInfo = document.getElementById('contact-info');
    contactInfo.classList.toggle('hidden');
});

// Newsletter Subscription
document.getElementById('subscribe-btn').addEventListener('click', function () {
    let email = document.getElementById('email').value;
    let message = document.getElementById('subscription-message');

    if (email.trim() === '') {
        message.textContent = "❌ Please enter a valid email!";
        message.style.color = "red";
    } else {
        message.textContent = "✅ Thank you for subscribing!";
        message.style.color = "green";
        document.getElementById('email').value = ''; // Clear input field
    }
});
