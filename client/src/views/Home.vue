<template>
  <v-main>
    <v-container class="d-flex justify-center">
      <v-alert width="1050" color="grey lighten-4"
        ><span class="font-weight-medium">Rent selected movies:</span></v-alert
      >
    </v-container>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="movies"
        show-select
        :items-per-page="10"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

<script>
import axios from 'axios';

export default {
  name: 'Home',

  data() {
    return {
      movies: [],
      headers: [
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Director',
          value: 'director',
        },
        {
          text: 'Genre',
          value: 'main_genre',
        },
        {
          text: 'Year',
          value: 'year',
          width: 100,
        },
        {
          text: 'Rated',
          value: 'rated',
          width: 100,
        },
        {
          text: 'Plot',
          value: 'plot',
        },
      ],
    };
  },

  created() {
    this.getMovies();
  },

  methods: {
    async getMovies() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/movies',
          method: 'GET',
        });
        this.movies = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
