document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const popUpClose = document.querySelector('.pop-up-background');
  const modalHeader = document.querySelector('.pop-up-container-header');
  const modalText = document.querySelector('.pop-up-container-text');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const emailValue = emailInput.value;
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!emailPattern.test(emailValue)) {
      emailError.style.display = 'block';
      emailInput.style.color = '#E74A3B'; 
      emailInput.style.borderColor = '#E74A3B'; 
      return; 
    } else {
      emailError.style.display = 'none'; 
      emailInput.style.color = ''; 
      emailInput.style.borderColor = ''; 
    }

    const messageInput = document.getElementById('message').value;

    try {
      await sendFormData(emailValue, messageInput);

      modalHeader.textContent = 'Thank you for your interest in cooperation!';
      modalText.textContent =
        'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.';
      popUpClose.classList.remove('pop-up-hide');

      form.reset();
    } catch (error) {
      modalHeader.textContent = 'Error';
      modalText.textContent =
        error.message || 'Something went wrong. Please try again later.';
      popUpClose.classList.remove('pop-up-hide');
    }
  });

  async function sendFormData(email, comment) {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, comment }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send the message');
    }
  }
});