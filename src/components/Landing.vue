<template>
  <v-container fluid>
    <v-layout row wrap>
        <v-img src="#">
          <v-flex xs12 class="text-xs-center" mt-5>
            <h1 class="mainheader" dark>Welcome to Compass</h1>
          </v-flex>
          <v-flex xs12 sm6 offset-sm3 mt-3>
            <blockquote class="blockquote text-xs-center">
              We are here to help you as a refugee <br>
              with our real time ressources and guide
            </blockquote>
          </v-flex>
          <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
            <v-btn color="teal" dark to="/signup">Sign Up</v-btn>
            <v-btn to="/signin">Sign In</v-btn>
          </v-flex>
        </v-img>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
 .mainheader {
     padding-top: 120px;
 }
</style>
