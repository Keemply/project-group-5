document.addEventListener('DOMContentLoaded', function () {
  const loadMoreButton = document.querySelector('.my-projects__button');
  const projectBlocks = document.querySelectorAll('.my-projects__block');
  const buttonContainer = document.querySelector(
    '.my-projects__button-container'
  );
  const projectsPerPage = 3;
  let currentVisible = 0;

  function showMoreProjects() {
    const nextVisible = currentVisible + projectsPerPage;
    projectBlocks.forEach((block, index) => {
      if (index < nextVisible) {
        block.style.display = 'block';
      }
    });
    currentVisible = nextVisible;

    if (currentVisible >= projectBlocks.length) {
      buttonContainer.style.display = 'none';
    }
  }

  projectBlocks.forEach((block, index) => {
    if (index < projectsPerPage) {
      block.style.display = 'block';
    } else {
      block.style.display = 'none';
    }
  });
  currentVisible = projectsPerPage;

  if (currentVisible >= projectBlocks.length) {
    loadMoreButton.style.display = 'none';
  }

  loadMoreButton.addEventListener('click', showMoreProjects);
});
