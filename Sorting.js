function sortMovies(sortOrder) {
    const movieThumbnails = document.querySelectorAll('.movie-thumbnail');
    const movieThumbnailArray = [];
    movieThumbnails.forEach(thumbnail => {
        movieThumbnailArray.push(thumbnail.parentElement);
    });
    const parent = movieThumbnailArray[0];

    const movies = [];

    movieThumbnails.forEach(thumbnail => {
        parent.removeChild(thumbnail);
        movies.push({
            thumbnail,
            title: thumbnail.getAttribute('data-movie-title'),
            year: thumbnail.getAttribute('data-movie-year'),
            genre: thumbnail.getAttribute('data-movie-genre'),
            rating: parseFloat(thumbnail.getAttribute('data-movie-rating')),
            summary: thumbnail.getAttribute('data-movie-summary'),
            src: thumbnail.src
        });
    });

    if (sortOrder === 'asc') {
        movies.sort((a, b) => a.rating - b.rating);
    } else {
        movies.sort((a, b) => b.rating - a.rating);
    }

    movies.forEach(movie => {
        movie.thumbnail.src = movie.src;
        movie.thumbnail.alt = movie.title;
        movie.thumbnail.setAttribute('data-movie-title', movie.title);
        movie.thumbnail.setAttribute('data-movie-year', movie.year);
        movie.thumbnail.setAttribute('data-movie-genre', movie.genre);
        movie.thumbnail.setAttribute('data-movie-rating', movie.rating);
        movie.thumbnail.setAttribute('data-movie-summary', movie.summary);
        parent.appendChild(movie.thumbnail);
    });
}