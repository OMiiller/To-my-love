// PERSONALIZE AQUI: troque as fotos, legendas, pergunta e resposta.
const photos = [
  { src: './assets/IMG-20261009-WA0049.jpg', caption: 'Mais um motivo para guardar esse dia no coração ♡' },
  { src: './assets/Screenshot_20261009_193602_Photos.jpg', caption: 'Meu lugar favorito é pertinho de você.' },
  { src: './assets/IMG-20260908-WA0041.jpg', caption: 'A gente, do jeitinho que eu amo.' },
  { src: './assets/IMG-20260706-WA0019.jpg', caption: 'Uma lembrança que sempre me faz sorrir.' },
  { src: './assets/IMG-20260706-WA0038.jpg', caption: 'Quero colecionar muitos momentos assim.' },
  { src: './assets/IMG-20260608-WA0039.jpg', caption: 'Com você, até os dias comuns são especiais.' },
  { src: './assets/IMG-20260305-WA0042.jpg', caption: 'Mais uma memória nossa para guardar.' },
  { src: './assets/IMG-20260224-WA0051.jpg', caption: 'Você deixa tudo mais bonito.' },
  { src: './assets/WhatsApp Image 2026-09-20 at 12.03.17.jpeg', caption: 'Que venham muitos outros capítulos.' }
];

// Use uma resposta que só vocês conheçam. Espaços e maiúsculas são ignorados.
const correctAnswer = 'assistir reels juntos';
// Coloque seu arquivo de áudio em assets e atualize também o source em index.html.

let currentPhoto = 0;
const image = document.querySelector('#slide-image');
const caption = document.querySelector('#slide-caption');
const dotsContainer = document.querySelector('#slide-dots');

function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;
  image.src = photos[currentPhoto].src;
  caption.textContent = photos[currentPhoto].caption;
  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.toggle('active', i === currentPhoto);
    dot.setAttribute('aria-current', i === currentPhoto ? 'true' : 'false');
  });
}

photos.forEach((photo, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'dot';
  dot.setAttribute('aria-label', `Ver foto ${index + 1}`);
  dot.addEventListener('click', () => showPhoto(index));
  dotsContainer.append(dot);
});
document.querySelector('.previous').addEventListener('click', () => showPhoto(currentPhoto - 1));
document.querySelector('.next').addEventListener('click', () => showPhoto(currentPhoto + 1));
showPhoto(0);
const birthdayTarget = new Date('2026-11-24T00:00:00-03:00').getTime();
const countdownGrid = document.querySelector('#countdown');
const countdownMessage = document.querySelector('#countdown-message');
let countdownInterval;
function updateCountdown() {
  const remaining = birthdayTarget - Date.now();
  if (remaining <= 0) {
    countdownGrid.hidden = true;
    countdownMessage.hidden = false;
    clearInterval(countdownInterval);
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  document.querySelector('#countdown-days').textContent = String(days).padStart(2, '0');
  document.querySelector('#countdown-hours').textContent = String(hours).padStart(2, '0');
  document.querySelector('#countdown-minutes').textContent = String(minutes).padStart(2, '0');
  document.querySelector('#countdown-seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
countdownInterval = window.setInterval(updateCountdown, 1000);
const envelopeIntro = document.querySelector('#envelope-intro');
const envelopeButton = document.querySelector('#open-envelope');
envelopeButton.addEventListener('click', () => {
  if (envelopeIntro.classList.contains('is-opening')) return;
  envelopeIntro.classList.add('is-opening');
  envelopeButton.disabled = true;
  const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 60 : 850;
  window.setTimeout(() => {
    envelopeIntro.hidden = true;
    document.querySelector('.page-shell').hidden = false;
    document.body.classList.remove('envelope-lock');
  }, delay);
});// Toca os efeitos em sequência depois da resposta correta.
const celebrationSound = new Audio('./assets/comemoracao.mp3');
const kissSound = new Audio('./assets/beijo.mp3');
const wrongAnswerSound = new Audio('./assets/Windows%20Error%20Meme%20Sound%20Effect.mp3');
celebrationSound.preload = 'auto';
kissSound.preload = 'auto';
wrongAnswerSound.preload = 'auto';

function playSuccessSounds() {
  celebrationSound.pause();
  kissSound.pause();
  celebrationSound.currentTime = 0;
  kissSound.currentTime = 0;
  celebrationSound.onended = () => {
    kissSound.currentTime = 0;
    kissSound.play().catch(() => {});
  };
  celebrationSound.play().catch(() => {});
}

document.querySelector('#quiz-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = document.querySelector('#quiz-answer').value
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLocaleLowerCase('pt-BR');
  const expected = correctAnswer.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLocaleLowerCase('pt-BR');
  const feedback = document.querySelector('#quiz-feedback');
  if (answer === expected) {
    wrongAnswerSound.pause();
    wrongAnswerSound.currentTime = 0;
    const wrongVideo = document.querySelector('#wrong-video');
    wrongVideo.hidden = true;
    document.querySelector('#wrong-video-frame').src = 'about:blank';
    const letter = document.querySelector('#letter');
    if (letter.hidden) playSuccessSounds();
    feedback.textContent = 'Acertou! Sua cartinha está logo aqui ♡';
    feedback.className = 'quiz-feedback success';
    letter.hidden = false;
    letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    wrongAnswerSound.pause();
    wrongAnswerSound.currentTime = 0;
    wrongAnswerSound.play().catch(() => {});
    const wrongVideo = document.querySelector('#wrong-video');
    wrongVideo.hidden = false;
    document.querySelector('#wrong-video-frame').src = 'https://www.youtube-nocookie.com/embed/wzw3VNLOX_c?autoplay=1&mute=1&rel=0';
    wrongVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    feedback.textContent = 'Quase! Tenta mais uma vez, meu amor. ♡';
    feedback.className = 'quiz-feedback error';
  }
});
