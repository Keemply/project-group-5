document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const popUpClose = document.querySelector('.pop-up-background');
    const modalHeader = document.querySelector('.pop-up-container-header');
    const modalText = document.querySelector('.pop-up-container-text');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email').value;
        const messageInput = document.getElementById('message').value;

        try {
            // Відправка POST запиту
            await sendFormData(emailInput, messageInput);

            // Відкриваємо модальне вікно з повідомленням про успіх
            modalHeader.textContent = 'Thank you for your interest in cooperation!';
            modalText.textContent = 'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.';
            popUpClose.classList.remove('pop-up-hide');

            // Очищення форми
            form.reset();
        } catch (error) {
            // Відображення помилки
            modalHeader.textContent = 'Error';
            modalText.textContent = error.message || 'Something went wrong. Please try again later.';
            popUpClose.classList.remove('pop-up-hide');
        }
    });

    async function sendFormData(email, message) {
        const response = await fetch('https://your-server-endpoint.com/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, message }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to send the message');
        }
    }
});