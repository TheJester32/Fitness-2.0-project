// const pashkovCard = document.querySelector('.pashkov-card');
const pashkov = document.querySelector('.pashkov');
// const ketovaCard = document.querySelector('.ketova-card');
// const ketova = document.querySelector('.ketova');

// pashkovCard.addEventListener('mouseover', () => {
//   if (pashkov.classList.contains('hidden') === true) {
//     pashkov.classList.remove('hidden');
//   }
// });

pashkov.addEventListener('mouseout', () => {
  if (pashkov.classList.contains('hidden') === false) {
    pashkov.classList.add('hidden');
  }
});

// ketovaCard.addEventListener('mouseover', () => {
//   if (ketova.classList.contains('hidden') === true) {
//     ketova.classList.remove('hidden');
//   }
// });

// ketova.addEventListener('mouseout', () => {
//   if (ketova.classList.contains('hidden') === false) {
//     ketova.classList.add('hidden');
//   }
// });
