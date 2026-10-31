const img = document.querySelector('.img-01');

img.addEventListener('mouseenter', () => {
  img.classList.add('hovered');
});

img.addEventListener('mouseleave', () => {
  img.classList.remove('hovered');
});