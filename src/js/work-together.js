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

        try {
            await sendFormData(emailInput, messageInput);
           
            modalTitle.textContent = 'Thank you for your interest in cooperation!';
            modalText.textContent = 'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.';
            backdrop.classList.add('is-open');
           
            form.reset();
        } catch (error) {            
            modalTitle.textContent = 'Error';
            modalText.textContent = 'Something went wrong. Please try again later.';
            backdrop.classList.add('is-open');
        }
    });

    closeModalButton.addEventListener('click', function () {
        backdrop.classList.remove('is-open');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            backdrop.classList.remove('is-open');
        }
    });

    function sendFormData(email, message) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve();
                } else {
                    reject();
                }
            }, 1000);
        });
    }
});