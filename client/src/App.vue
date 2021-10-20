<template>
  <v-app>
    <v-app-bar app>
      <img src="logo.png" width="100" class="mt-10 img" />
      <span class="text-h4">Movies</span>
      <v-spacer></v-spacer>
      <v-btn depressed href="https://www.imdb.com/movies-in-theaters/" style="text-decoration: none "
        >LATEST REALESES
        <v-icon>
          mdi-open-in-new
        </v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.img {
  margin-top: 200px;
}
</style>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
