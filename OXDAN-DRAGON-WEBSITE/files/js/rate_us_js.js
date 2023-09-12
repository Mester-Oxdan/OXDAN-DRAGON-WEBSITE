//localStorage.clear();

const stars = document.querySelectorAll('.star');
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('#progress-text');
const thanksMessage = document.querySelector('#thanks-message');

let userHasRated = false;
let totalRatings = 0;
let userRating = 0;

if (localStorage.getItem('userRating')) {
    userRating = parseInt(localStorage.getItem('userRating'));
    userHasRated = true;
    stars[userRating - 1].classList.add('active');
    updateProgress();
}

stars.forEach((star) => {
    star.addEventListener('click', () => {
        if (!userHasRated) {
            userRating = parseInt(star.getAttribute('data-rating'));
            userHasRated = true;
            localStorage.setItem('userRating', userRating);
            updateProgress();
            showThanksMessage();
        }
    });
});

function updateProgress() {
    if (userHasRated) {
        totalRatings += userRating;
        const progressPercentage = (totalRatings / 5) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `Progress: ${progressPercentage.toFixed(2)}%`;
    }
}

function showThanksMessage() {
    thanksMessage.style.display = 'block';
}
