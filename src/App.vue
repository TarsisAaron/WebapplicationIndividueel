<style>@import './MovieCSS.css';</style>

<template>
  <div>
    <div id="top-div">
      <a href="CurrentMovies.html">Current Movies</a>
      <a href="ExpectedMovies.html">Expected Movies</a>
      <a href="BestMovies.html">Best Movies</a>
      <select id="sort-options" @change="sortMovies">
        <option value="" selected disabled hidden>Sort By</option>
        <option value="asc">Rating asc</option>
        <option value="desc">Rating desc</option>
      </select>
    </div>

    <div id="movie-overview" v-if="selectedMovie">
      <img :src="selectedMovie.image" :alt="selectedMovie.title" style="max-height: 400px">
      <div id="selected-movie-details">
        <p id="selected-movie-title">{{ selectedMovie.title }}</p>
        <p id="selected-movie-year">{{ selectedMovie.year }}</p>
        <p id="selected-movie-genre">{{ selectedMovie.genre }}</p>
        <p id="selected-movie-rating">{{ selectedMovie.rating }}</p>
        <p id="selected-movie-summary">{{ selectedMovie.summary }}</p>
      </div>
    </div>

    <div id="bottom-div">
      <div v-for="movie in movies" :key="movie.title" class="movie-container">
        <img :src="movie.image" :alt="movie.title" @click="selectMovie(movie)">
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      movies: [
        {
          image: 'src/Images/DjangoUnchained.jpg',
          title: 'Django Unchained',
          year: 2012,
          genre: 'Drama/Western',
          rating: 8.4,
          summary: 'De slaaf Django wordt bevrijd door de premiejager Dr. Schultz. Django heeft informatie die Schultz nodig heeft om boeven te vangen. Ze sluiten een verbond. Django helpt Schultz en Schultz helpt Django met het terugvinden van zijn vrouw.'
        },
        {
          image: 'src/Images/Inception.jpg',
          title: 'Inception',
          year: 2010,
          genre: 'Action/Adventure/Sci-Fi',
          rating: 8.8,
          summary: 'Dom Cobb is een meesterdief, gespecialiseerd in het “stelen” van waardevolle geheimen in de droomstaat van een mens, wanneer de geest het kwetsbaarst is. Hij krijgt een nieuwe taak: niet het stelen, maar het plaatsen van een idee.'
        },
        {
          image: 'src/Images/TheDeparted.jpg',
          title: 'The Departed',
          year: 2014,
          genre: 'Adventure/Drama/Sci-Fi',
          rating: 8.6,
          summary: 'Agent Billy moet infiltreren in een criminele organisatie. Dit lukt en al snel kan er informatie worden doorgespeeld. Dan blijkt dat er bij de politie ook een mol zit en beide jongemannen zijn hun leven niet meer zeker.'
        },
        {
          image: 'src/Images/Titanic.jpg',
          title: 'Titanic',
          year: 1997,
          genre: 'Drama/Romance',
          rating: 7.9,
          summary: 'Engeland, 1912. Aan boord van de Titanic, het grootste passagiersschip ter wereld, wordt een jonge vrouw uit hoge sociale klasse verliefd op een straatarme kunstenaar. Na een dramatische gebeurtenis, begint voor beiden een liefdesverhaal over klassengrenzen heen. Maar hun liefde is noodlottig: op een nacht komt de Titanic in aanvaring met een enorme ijsberg.'
        }
      ],

      selectedMovie: null,
    }
  },
  methods: {
    sortMovies(event) {
      if (event.target.value === 'asc') {
        this.movies.sort((a, b) => a.rating - b.rating);
      } else if (event.target.value === 'desc') {
        this.movies.sort((a, b) => b.rating - a.rating);
      }
    },
    selectMovie(movie) {
      this.selectedMovie = movie;
    }
  },
}
</script>

