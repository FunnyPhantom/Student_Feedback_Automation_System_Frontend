<template>
  <v-container fill-height>
    <v-layout justify-center>
      <v-flex xs12 md8 lg6>
        <v-card>
          <v-toolbar color="blue darken-1" class="theme--dark">
            <v-toolbar-title class="ma-auto">
              ثبت نام
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="registerEntry.sid"
                label="َشماره دانشجویی"
                prepend-icon="book"
                class="ml-4 pl-2"
              ></v-text-field>
              <v-text-field
                v-model="registerEntry.username"
                label="نام کاربری"
                prepend-icon="person"
                class="ml-4 pl-2"
              ></v-text-field>
              <v-text-field
                v-model="registerEntry.password"
                label="رمز عبور"
                prepend-icon="lock"
                class="ml-4 pl-2"
              ></v-text-field>
              <div class="text-xs-center mt-5">
                <v-btn
                  color="blue"
                  style="width: 130px;"
                  dark
                  @click="registerUser()"
                  >ثبت نام</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar color="success" top>
      succesfully registered.
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// eslint-disable-next-line no-unused-vars
import RegisterEntry from '~/models/RegisterEntry';
import { registerUserApi } from '~/api';
@Component
export default class Register extends Vue {
  name: string = 'mamad';
  registerEntry: RegisterEntry = {
    username: '',
    password: '',
    sid: ''
  };
  showSuccess: boolean = false;

  async registerUser() {
    try {
      const d = await registerUserApi(this.registerEntry, this.$axios);
      if (d) {
        this.showSuccess = true;
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}
</script>

<style scoped></style>
