<template>
  <v-main>
    <v-container class="d-flex justify-center">
      <v-alert width="1050" color="blue-grey darken-1"
        ><span class="font-weight-medium white--text"
          >Rent selected movies: {{ selected.map((el) => el.title).join(', ') }}</span
        ></v-alert
      >
    </v-container>
    <v-container>
      <v-card>
        <v-card-title>
          <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table
          v-model="selected"
          :search="search"
          :headers="headers"
          :items="movies"
          show-select
          :items-per-page="6"
          :footer-props="{ itemsPerPageOptions: [6, 12, 18] }"
          class="elevation-1"
        ></v-data-table
      ></v-card>
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
      selected: [],
      search: '',
      movies: [],
      headers: [
        {
          text: 'Title',
          value: 'title',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Director',
          value: 'director',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Genre',
          value: 'main_genre',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Year',
          value: 'year',
          width: 100,
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Rated',
          value: 'rated',
          width: 100,
          class: 'blue-grey lighten-5',
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
