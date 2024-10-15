import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


document.addEventListener('DOMContentLoaded', function () {
  
  new Accordion('.accordion', {
    duration: 400,            
    showMultiple: false,      
    openOnInit: [0],          
    onOpen: function (currentElement) {
      currentElement.parentElement.classList.add('open'); 
    },
    onClose: function (currentElement) {
      currentElement.parentElement.classList.remove('open'); 
    }
    
  });
  console.log(document.querySelector('.accordion'));
});
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-item');
  
  if (accordions.length > 0) {
    accordions[0].classList.add('open');
    const firstBody = accordions[0].querySelector('.accordion-body');
    firstBody.style.display = 'block';
}

accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        
        accordions.forEach(i => {
            if (i !== item) {
                i.classList.remove('open');
                i.querySelector('.accordion-body').style.display = 'none';
            }
        });

       
        item.classList.toggle('open');
        const body = item.querySelector('.accordion-body');
        body.style.display = item.classList.contains('open') ? 'block' : 'none';
    });
});
});