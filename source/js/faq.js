const sections = document.querySelectorAll('.faq__upper-item');
const services = document.querySelector('.services');
const center = document.querySelector('.center');
const sub = document.querySelector('.sub');
const rules = document.querySelector('.rules');
const firstServicesClose = document.querySelector('.faq__services-first-close');
const firstServicesOpen = document.querySelector('.faq__services-first-open');
const secondServicesClose = document.querySelector('.faq__services-second-close');
const secondServicesOpen = document.querySelector('.faq__services-second-open');
const thirdServicesClose = document.querySelector('.faq__services-third-close');
const thirdServicesOpen = document.querySelector('.faq__services-third-open');
const fourthServicesClose = document.querySelector('.faq__services-fourth-close');
const fourthServicesOpen = document.querySelector('.faq__services-fourth-open');

const firstCenterClose = document.querySelector('.faq__center-first-close');
const firstCenterOpen = document.querySelector('.faq__center-first-open');
const secondCenterClose = document.querySelector('.faq__center-second-close');
const secondCenterOpen = document.querySelector('.faq__center-second-open');
const thirdCenterClose = document.querySelector('.faq__center-third-close');
const thirdCenterOpen = document.querySelector('.faq__center-third-open');
const fourthCenterClose = document.querySelector('.faq__center-fourth-close');
const fourthCenterOpen = document.querySelector('.faq__center-fourth-open');

const firstSubClose = document.querySelector('.faq__sub-first-close');
const firstSubOpen = document.querySelector('.faq__sub-first-open');
const secondSubClose = document.querySelector('.faq__sub-second-close');
const secondSubOpen = document.querySelector('.faq__sub-second-open');
const thirdSubClose = document.querySelector('.faq__sub-third-close');
const thirdSubOpen = document.querySelector('.faq__sub-third-open');
const fourthSubClose = document.querySelector('.faq__sub-fourth-close');
const fourthSubOpen = document.querySelector('.faq__sub-fourth-open');

const firstRulesClose = document.querySelector('.faq__rules-first-close');
const firstRulesOpen = document.querySelector('.faq__rules-first-open');
const secondRulesClose = document.querySelector('.faq__rules-second-close');
const secondRulesOpen = document.querySelector('.faq__rules-second-open');

const removeDefaultSection = function () {
  if (document.querySelector('.default-section').classList.contains('default-option-item') === true) {
    document.querySelector('.default-section').classList.remove('default-option-item');
  }
};

const changeSection = () => {
  if (document.querySelector('.third-section').classList.contains('default-option-item') === true) {
    services.classList.remove('hidden');
    center.classList.add('hidden');
    sub.classList.add('hidden');
    rules.classList.add('hidden');
  } else if (document.querySelector('.first-section').classList.contains('default-option-item') === true) {
    center.classList.remove('hidden');
    services.classList.add('hidden');
    sub.classList.add('hidden');
    rules.classList.add('hidden');
  } else if (document.querySelector('.second-section').classList.contains('default-option-item') === true) {
    sub.classList.remove('hidden');
    services.classList.add('hidden');
    center.classList.add('hidden');
    rules.classList.add('hidden');
  } else if (document.querySelector('.fourth-section').classList.contains('default-option-item') === true) {
    rules.classList.remove('hidden');
    services.classList.add('hidden');
    center.classList.add('hidden');
    sub.classList.add('hidden');
  }
};

firstServicesOpen.addEventListener('click', () =>{
  firstServicesOpen.classList.add('hidden');
  firstServicesClose.classList.remove('hidden');
  document.querySelector('.services-first-answer').classList.remove('hidden');
});

firstServicesClose.addEventListener('click', () =>{
  firstServicesClose.classList.add('hidden');
  firstServicesOpen.classList.remove('hidden');
  document.querySelector('.services-first-answer').classList.add('hidden');
});

secondServicesOpen.addEventListener('click', () =>{
  secondServicesOpen.classList.add('hidden');
  secondServicesClose.classList.remove('hidden');
  document.querySelector('.services-second-answer').classList.remove('hidden');
});

secondServicesClose.addEventListener('click', () =>{
  secondServicesClose.classList.add('hidden');
  secondServicesOpen.classList.remove('hidden');
  document.querySelector('.services-second-answer').classList.add('hidden');
});

thirdServicesOpen.addEventListener('click', () =>{
  thirdServicesOpen.classList.add('hidden');
  thirdServicesClose.classList.remove('hidden');
  document.querySelector('.services-third-answer').classList.remove('hidden');
});

thirdServicesClose.addEventListener('click', () =>{
  thirdServicesClose.classList.add('hidden');
  thirdServicesOpen.classList.remove('hidden');
  document.querySelector('.services-third-answer').classList.add('hidden');
});

fourthServicesOpen.addEventListener('click', () =>{
  fourthServicesOpen.classList.add('hidden');
  fourthServicesClose.classList.remove('hidden');
  document.querySelector('.services-fourth-answer').classList.remove('hidden');
});

fourthServicesClose.addEventListener('click', () =>{
  fourthServicesClose.classList.add('hidden');
  fourthServicesOpen.classList.remove('hidden');
  document.querySelector('.services-fourth-answer').classList.add('hidden');
});


firstCenterOpen.addEventListener('click', () =>{
  firstCenterOpen.classList.add('hidden');
  firstCenterClose.classList.remove('hidden');
  document.querySelector('.center-first-answer').classList.remove('hidden');
});

firstCenterClose.addEventListener('click', () =>{
  firstCenterClose.classList.add('hidden');
  firstCenterOpen.classList.remove('hidden');
  document.querySelector('.center-first-answer').classList.add('hidden');
});

secondCenterOpen.addEventListener('click', () =>{
  secondCenterOpen.classList.add('hidden');
  secondCenterClose.classList.remove('hidden');
  document.querySelector('.center-second-answer').classList.remove('hidden');
});

secondCenterClose.addEventListener('click', () =>{
  secondCenterClose.classList.add('hidden');
  secondCenterOpen.classList.remove('hidden');
  document.querySelector('.center-second-answer').classList.add('hidden');
});

thirdCenterOpen.addEventListener('click', () =>{
  thirdCenterOpen.classList.add('hidden');
  thirdCenterClose.classList.remove('hidden');
  document.querySelector('.center-third-answer').classList.remove('hidden');
});

thirdCenterClose.addEventListener('click', () =>{
  thirdCenterClose.classList.add('hidden');
  thirdCenterOpen.classList.remove('hidden');
  document.querySelector('.center-third-answer').classList.add('hidden');
});

fourthCenterOpen.addEventListener('click', () =>{
  fourthCenterOpen.classList.add('hidden');
  fourthCenterClose.classList.remove('hidden');
  document.querySelector('.center-fourth-answer').classList.remove('hidden');
});

fourthCenterClose.addEventListener('click', () =>{
  fourthCenterClose.classList.add('hidden');
  fourthCenterOpen.classList.remove('hidden');
  document.querySelector('.center-fourth-answer').classList.add('hidden');
});


firstSubOpen.addEventListener('click', () =>{
  firstSubOpen.classList.add('hidden');
  firstSubClose.classList.remove('hidden');
  document.querySelector('.sub-first-answer').classList.remove('hidden');
});

firstSubClose.addEventListener('click', () =>{
  firstSubClose.classList.add('hidden');
  firstSubOpen.classList.remove('hidden');
  document.querySelector('.sub-first-answer').classList.add('hidden');
});

secondSubOpen.addEventListener('click', () =>{
  secondSubOpen.classList.add('hidden');
  secondSubClose.classList.remove('hidden');
  document.querySelector('.sub-second-answer').classList.remove('hidden');
});

secondSubClose.addEventListener('click', () =>{
  secondSubClose.classList.add('hidden');
  secondSubOpen.classList.remove('hidden');
  document.querySelector('.sub-second-answer').classList.add('hidden');
});

thirdSubOpen.addEventListener('click', () =>{
  thirdSubOpen.classList.add('hidden');
  thirdSubClose.classList.remove('hidden');
  document.querySelector('.sub-third-answer').classList.remove('hidden');
});

thirdSubClose.addEventListener('click', () =>{
  thirdSubClose.classList.add('hidden');
  thirdSubOpen.classList.remove('hidden');
  document.querySelector('.sub-third-answer').classList.add('hidden');
});

fourthSubOpen.addEventListener('click', () =>{
  fourthSubOpen.classList.add('hidden');
  fourthSubClose.classList.remove('hidden');
  document.querySelector('.sub-fourth-answer').classList.remove('hidden');
});

fourthSubClose.addEventListener('click', () =>{
  fourthSubClose.classList.add('hidden');
  fourthSubOpen.classList.remove('hidden');
  document.querySelector('.sub-fourth-answer').classList.add('hidden');
});


firstRulesOpen.addEventListener('click', () =>{
  firstRulesOpen.classList.add('hidden');
  firstRulesClose.classList.remove('hidden');
  document.querySelector('.rules-first-answer').classList.remove('hidden');
});

firstRulesClose.addEventListener('click', () =>{
  firstRulesClose.classList.add('hidden');
  firstRulesOpen.classList.remove('hidden');
  document.querySelector('.rules-first-answer').classList.add('hidden');
});

secondRulesOpen.addEventListener('click', () =>{
  secondRulesOpen.classList.add('hidden');
  secondRulesClose.classList.remove('hidden');
  document.querySelector('.rules-second-answer').classList.remove('hidden');
});

secondRulesClose.addEventListener('click', () =>{
  secondRulesClose.classList.add('hidden');
  secondRulesOpen.classList.remove('hidden');
  document.querySelector('.rules-second-answer').classList.add('hidden');
});


let lastClicked = sections[0];

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', function (e) {
    removeDefaultSection();
    lastClicked.classList.remove('default-option-item');
    e.target.classList.add('default-option-item');
    lastClicked = e.target;
    changeSection();
  });
}
