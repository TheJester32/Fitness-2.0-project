const months = document.querySelectorAll('.membership__months');

const changeCard = () => {
  if (document.querySelector('.half').classList.contains('month-default') === true
  ) {
    document.querySelector('.half-card').classList.remove('hidden');
    document.querySelector('.year-card').classList.add('hidden');
    document.querySelector('.card').classList.add('hidden');
  } else if (document.querySelector('.year').classList.contains('month-default') === true
  ) {
    document.querySelector('.half-card').classList.add('hidden');
    document.querySelector('.year-card').classList.remove('hidden');
    document.querySelector('.card').classList.add('hidden');
  } else if (document.querySelector('.month').classList.contains('month-default') === true
  ) {
    document.querySelector('.half-card').classList.add('hidden');
    document.querySelector('.year-card').classList.add('hidden');
    document.querySelector('.card').classList.remove('hidden');
  }
};

let lastClicked = months[0];

for (let i = 0; i < months.length; i++) {
  months[i].addEventListener('click', function (e) {
    lastClicked.classList.remove('month-default');
    e.target.classList.add('month-default');
    lastClicked = e.target;
    changeCard();
  });
}

