<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
        <v-avatar class="avatar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Creative-Tail-People-wonder-women.svg/240px-Creative-Tail-People-wonder-women.svg.png" alt="avatar">
          <br>
          <v-btn small color="teal" dark type="submit">Upload picture</v-btn>
        </v-avatar>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="userSignUp">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="organization"
                      label="Organization"
                      id="organization"
                      type="text"
                      v-model="organization"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      type="email"
                      v-model="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      type="password"
                      v-model="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    type="password"
                    v-model="passwordConfirm"
                    :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="address"
                      label="Address"
                      id="address"
                      type="text"
                      v-model="address"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="city"
                      label="City"
                      id="city"
                      type="text"
                      v-model="city"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                    name="country"
                    label="Country"
                    id="country"
                    type="text"
                    v-model="country"
                    required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field
                    name="postal"
                    label="Postal code"
                    id="postal"
                    type="text"
                    v-model="postal"
                    required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 class="text-xs-center" mt-5>
                    <v-btn color="teal" dark type="submit">Update profile</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password === this.passwordConfirm ? true : 'Passwords don\'t match'
    }
  },
  methods: {
    userSignUp () {
      if (this.comparePasswords !== true) {
        return
      }
      this.$store.dispatch('userSignUp', { email: this.email,
        password: this.password })
    }
  }
}
</script>

