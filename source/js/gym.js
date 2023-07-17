
const play = document.querySelector('.gym__play-active');
const video = document.querySelector('.gym__video');
const picture = document.querySelector('.gym__second-picture');
const preview = document.querySelector('.gym__video-preview');
const playStatic = document.querySelector('.gym__play');

play.addEventListener('click', ()=>{
  video.classList.remove('hidden');
  play.classList.add('hidden');
  picture.classList.add('hidden');
  preview.classList.add('hidden');
  playStatic.classList.add('hidden');
  video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
});

