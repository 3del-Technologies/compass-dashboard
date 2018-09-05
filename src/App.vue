<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="teal" dark app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <span>
        <v-avatar>
          <img src="assets/img/5cj52aXSjKtih6Q1CzwP_8t6IAjpFT9GY5g3wwSGZ_compass-primary-bg.png" alt="">
        </v-avatar>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sidebar: false,
        menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Profile', path: '/profile', icon: 'account_circle' },
          { title: 'Organizations', path: '/directory', icon: 'business' },
          { title: 'Your Guide', path: '/guide', icon: 'location_on' },
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
        ]
      }
    },
    computed: {
      appTitle () {
        return this.$store.state.appTitle
      }
    }
  }
</script>