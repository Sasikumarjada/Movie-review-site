document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const movieTitle = document.getElementById('movie-title').value;
    const reviewText = document.getElementById('review').value;

    const reviewList = document.getElementById('review-list');
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review');
    reviewItem.innerHTML = `<h3>${movieTitle}</h3><p>${reviewText}</p>`;

    reviewList.appendChild(reviewItem);

    // Clear the form
    document.getElementById('form').reset();
});
