const popUpclose = document.querySelector('.pop-up-background');
const popUpBut = document.querySelector('.pop-up-container-button');

function closePopUp() {
  popUpclose.classList.add('pop-up-hide');
}
popUpBut.addEventListener('click', closePopUp);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !popUpclose.classList.contains('pop-up-hide')) {
    closePopUp();
  }
});
