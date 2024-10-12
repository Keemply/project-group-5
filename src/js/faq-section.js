import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


document.addEventListener('DOMContentLoaded', function() {
 
  new Accordion('.faq-list', {
      duration: 400,
      showMultiple: false, 
      openOnInit: [0], 
      onOpen: function(currentElement) {
          
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-list-item');

  
  function closeAllItems() {
      faqItems.forEach(item => {
          const button = item.querySelector('.accordion-header-btn');
          const body = item.querySelector('.accordion-body');
          button.setAttribute('aria-expanded', 'false');
          body.classList.remove('active');
      });
  }

  
  const firstItem = faqItems[0];
  const firstButton = firstItem.querySelector('.accordion-header-btn');
  const firstBody = firstItem.querySelector('.accordion-body');
  firstButton.setAttribute('aria-expanded', 'true');
  firstBody.classList.add('active');

 
  faqItems.forEach(item => {
      const button = item.querySelector('.accordion-header-btn');
      const body = item.querySelector('.accordion-body');

      button.addEventListener('click', () => {
          const isExpanded = button.getAttribute('aria-expanded') === 'true';

          
          closeAllItems();

          
          if (!isExpanded) {
              button.setAttribute('aria-expanded', 'true');
              body.classList.add('active');
          }
      });
  });
});