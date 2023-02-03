const checkbox = document.querySelector('#checkbox');
const label = checkbox.nextElementSibling;
const svg = label.querySelector('svg');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    svg.classList.remove('hidden');
  } else {
    svg.classList.add('hidden');
  }
});