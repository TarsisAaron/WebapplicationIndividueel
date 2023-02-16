const movieThumbnails = document.querySelectorAll('.movie-thumbnail');
const movieOverview = document.querySelector('#movie-overview');
const selectedMovieImage = document.querySelector('#selected-movie-image');
const selectedMovieTitle = document.querySelector('#selected-movie-title');
const selectedMovieYear = document.querySelector('#selected-movie-year');
const selectedMovieGenre = document.querySelector('#selected-movie-genre');
const selectedMovieRating = document.querySelector('#selected-movie-rating');
const selectedMovieSummary = document.querySelector('#selected-movie-summary');

movieThumbnails.forEach(movieThumbnail => {
    movieThumbnail.addEventListener('click', function() {
        console.log("Movie thumbnail clicked:", movieThumbnail.dataset.movieTitle);
        selectedMovieImage.src = movieThumbnail.src;
        selectedMovieTitle.textContent = movieThumbnail.dataset.movieTitle;
        selectedMovieYear.textContent = movieThumbnail.dataset.movieYear;
        selectedMovieGenre.textContent = movieThumbnail.dataset.movieGenre;
        selectedMovieRating.textContent = movieThumbnail.dataset.movieRating;
        selectedMovieSummary.textContent = movieThumbnail.dataset.movieSummary;
        movieOverview.style.display = 'block';
    });
});
