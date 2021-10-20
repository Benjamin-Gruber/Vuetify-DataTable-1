<template> </template>

<script>
import axios from 'axios';

export default {
  name: 'Home',

  data() {
    return {
      movies: [],
    };
  },

  created() {
    getMovies;
  },

  methods: {
    async getMovies() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/cars',
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
