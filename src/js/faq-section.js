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
});