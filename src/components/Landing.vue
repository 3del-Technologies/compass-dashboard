<template>
  <v-container class="main_layout" fluid>
    <v-layout row wrap>
      <v-img class="land_banner_img" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Montreal_at_Night_%282916462734%29.jpg">
        <v-flex xs12 class="text-xs-center" mt-5>
          <h1 class="main_header" dark>We are Compass</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <blockquote class="blockquote text-xs-center">
              We are here to help you as a refugee <br>
              with our real time guide and ressources
          </blockquote>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
          <v-btn color="teal" dark large to="/signup">Sign Up</v-btn>
          <v-btn to="/signin" large>Sign In</v-btn>
        </v-flex>
      </v-img>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
 .main_layout {
   padding-top: 0;
 }
 .main_header {
    padding-top: 180px;
    font-weight: 600;
    font-size: 3.8em;
 }
 .blockquote {
    font-weight: 300;
    font-size: 1.58em;
 }
.land_banner_img {
    color: white;
    /* background-color: #42D371; */
    background-position: center center;
    background-size: cover;
    height: 120%;
    overflow: hidden;
    position: absolute;
    width: 100%;
    filter: blur(0.4px) opacity(1);
    margin-bottom: -190px;
}
 
</style>
