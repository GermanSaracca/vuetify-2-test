<template>
  <v-app app>
    <NavBar></NavBar>
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },

  data: () => ({
    //
  })
}
</script>
