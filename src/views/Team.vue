<template>
  <div class="team px-4">
    <h1 class="text-h4 grey--text mt-4">Team</h1>

    <v-container class="my-5">
      <v-layout row>
        <v-flex  xs12 sm6 md4 lg3 v-for="{ name, role, avatar } in team" :key="name">
          <v-card class="text-center ma-3 pa-4">
            <v-responsive >
              <v-avatar size="100" class="grey lighten-2">
                <img :src="avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="text-h6">
                {{name}}
              </div>
              <div class="grey--text">{{role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn small plain color="grey">
                <v-icon left small>mdi-message</v-icon>
                <span class="caption">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TeamView',
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' }
      ]
    }
  }
}
</script>
