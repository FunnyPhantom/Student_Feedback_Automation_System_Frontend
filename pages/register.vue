<template>
  <v-container fill-height>
    <v-layout justify-center>
      <v-flex lg6 md8 xs12>
        <v-card>
          <v-toolbar class="theme--dark" color="blue darken-1">
            <v-toolbar-title class="ma-auto">
              ثبت نام
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                class="ml-4 pl-2"
                label="َشماره دانشجویی"
                prepend-icon="book"
                v-model="registerEntry.sid"
              ></v-text-field>
              <v-text-field
                class="ml-4 pl-2"
                label="نام کاربری"
                prepend-icon="person"
                v-model="registerEntry.username"
              ></v-text-field>
              <v-text-field
                class="ml-4 pl-2"
                label="رمز عبور"
                prepend-icon="lock"
                v-model="registerEntry.password"
              ></v-text-field>
              <div class="text-xs-center mt-5">
                <v-btn
                  @click="registerUser()"
                  color="blue"
                  dark
                  style="width: 130px;"
                  >ثبت نام
                </v-btn>
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
import { Component, Vue } from "nuxt-property-decorator";
// eslint-disable-next-line no-unused-vars
import RegisterEntry from "~/models/RegisterEntry";
import { registerUserApi } from "~/api";

@Component
export default class Register extends Vue {
  name: string = "mamad";
  registerEntry: RegisterEntry = {
    username: "",
    password: "",
    sid: ""
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
