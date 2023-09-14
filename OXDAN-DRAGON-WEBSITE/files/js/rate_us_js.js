const stars = document.querySelectorAll('.star');
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('#progress-text');
const thanksMessage = document.querySelector('#thanks-message');
let rating = 0;

stars.forEach((star) => {
  star.addEventListener('click', () => {
    rating = parseInt(star.getAttribute('data-rating'));
    updateStars();
  });
});

function updateStars() {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });

  const progressWidth = (rating / 5) * 100;
  progressBar.style.width = progressWidth + "%";
  progressText.textContent = `Overal: ${progressWidth.toFixed(2)}%`;
  showThanksMessage();
}

function showThanksMessage() {
    thanksMessage.style.display = 'block';
}