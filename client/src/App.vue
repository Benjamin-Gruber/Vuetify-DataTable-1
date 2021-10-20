<template>
  <v-app>
    <v-app-bar app>
      <img src="logo.png" width="100" class="mt-10"/><span class="font-weight-black">Movies</span>
      <v-spacer></v-spacer
    ></v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
