const myProjectBlocks = document.querySelectorAll('.my-projects__block');
const myProjectButtonContainer = document.querySelector(
  '.my-projects__button-container'
);
const myProjectLoader = document.querySelector('.my-projects__loader');
const myProjectButton = document.querySelector('.my-projects__button');
let currentIndex = 0;
const projectsPerPage = 3;

function showMoreProjects() {
  const projectsToShow = Array.from(myProjectBlocks).slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  projectsToShow.forEach(block => {
    block.style.display = 'block';
  });
  currentIndex += projectsPerPage;
  // scrollMyProjects();

  if (currentIndex >= myProjectBlocks.length) {
    myProjectButtonContainer.style.display = 'none';
  }
}

// function scrollMyProjects() {
//   const project = Array.from(myProjectBlocks).slice(
//     currentIndex - projectsPerPage,
//     currentIndex
//   );

//   if (project.length > 0) {
//     project[project.length - 1].scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   }
// }

myProjectBlocks.forEach((block, index) => {
  if (index >= projectsPerPage) {
    block.style.display = 'none';
  }
});

myProjectButton.addEventListener('click', event => {
  event.preventDefault();

  myProjectLoader.style.display = 'block';
  myProjectButton.style.display = 'none';
  setTimeout(() => {
    showMoreProjects();
    myProjectLoader.style.display = 'none';
    myProjectButton.style.display = 'block';
  }, 500);
});
showMoreProjects();
