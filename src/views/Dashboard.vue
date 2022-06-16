<template>
  <div class="dashboard px-4">
    <h1 class="text-h4 grey--text mt-4">Dashboard</h1>

    <v-container class="my-5">
      <v-layout class="mb-3">
        <v-btn small plain color="grey" @click="sortBy('title')">
          <v-icon left>mdi-folder</v-icon>
          <span class="caption text-lowercase">Order by project name</span>
        </v-btn>
        <v-btn small plain color="grey" @click="sortBy('person')">
          <v-icon left>mdi-account</v-icon>
          <span class="caption text-lowercase">Order by person</span>
        </v-btn>
      </v-layout>
      <v-card
        flat
        class="pa-3 mb-2"
        v-for="{ title, person, due, status } in projects"
        :key="title"
      >
        <v-layout row :class="`project ${status} pa-3`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 align-self-center>
            <div  class="d-flex justify-end">
              <v-chip :class="`${status} white--text caption`" small>{{ status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' }
      ]
    }
  },
  methods: {
    sortBy(key) {
      this.projects.sort((a, b) => a[key] < b[key] ? -1 : 1)
    }
  }
}
</script>

<style lang="scss" scoped>

.project {

  &.complete {
    border-left: 4px solid #3cd1c2;
  }
  &.ongoing {
    border-left: 4px solid #ffc107;
  }
  &.overdue {
    border-left: 4px solid #ff5252;
  }
}
.v-chip {
  &.complete {
    background-color:#3cd1c2 !important;
  }
  &.ongoing {
    background-color:#ffc107 !important;
  }
  &.overdue {
    background-color:#ff5252 !important;
  }
}
</style>
