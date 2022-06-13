<template>
  <nav>
    <v-app-bar flat app dark>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Testing</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain color="grey">
        <span>SIGN OUT</span>
        <v-icon right>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app dark>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.path"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        {
          icon: 'mdi-view-dashboard',
          text: 'Dashboard',
          path: '/'
        },
        {
          icon: 'mdi-view-list',
          text: 'Projects',
          path: '/projects'
        },
        {
          icon: 'mdi-account-multiple',
          text: 'Team',
          path: '/team'
        }
      ]
    }
  }
}
</script>
