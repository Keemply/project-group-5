document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const backdrop = document.getElementById('backdrop');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const closeModalButton = document.getElementById('closeModal');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email').value;
        const messageInput = document.getElementById('message').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput)) {
            modalTitle.textContent = "Error";
            modalText.textContent = "The email entered is incorrect. Please check its correctness.";
            backdrop.classList.add('is-open');
            return;
        }

        try {
            const response = await fetch('https://your-server.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailInput,
                    message: messageInput,
                }),
            });

            if (!response.ok) {
                throw new Error('Server error');
            }

            modalTitle.textContent = "Thank you for your interest!";
            modalText.textContent = "The manager will contact you shortly.";
            backdrop.classList.add('is-open');
            form.reset(); 
        } catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'There was an error sending your message. Please try again.',
            });
        }
    });

    closeModalButton.addEventListener('click', function () {
        backdrop.classList.remove('is-open');
    });

    backdrop.addEventListener('click', function (event) {
        if (event.target === backdrop) {
            backdrop.classList.remove('is-open');
        }
    });
});