<template>
  <v-container fill-height>
    <v-layout justify-center>
      <v-flex lg6 md8 xs12>
        <v-card>
          <v-toolbar class="theme--dark" color="blue darken-1">
            <v-toolbar-title class="ma-auto">
              ورود
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                class="ml-4 pl-2"
                label="نام کاربری"
                prepend-icon="person"
                v-model="loginEntry.username"
              ></v-text-field>
              <v-text-field
                class="ml-4 pl-2"
                label="رمز عبور"
                prepend-icon="lock"
                v-model="loginEntry.password"
              ></v-text-field>
              <div class="text-xs-center mt-5">
                <v-btn
                  @click="doLogin()"
                  color="blue"
                  dark
                  style="width: 130px;"
                  >ورود
                </v-btn>
              </div>
              <div>
                <v-btn @click="getUser()">get user</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { getUserApi, loginUserApi } from "~/api";
// eslint-disable-next-line no-unused-vars
import LoginEntry from "~/models/LoginEntry";
// eslint-disable-next-line no-unused-vars

@Component({})
export default class Login extends Vue {
  loginEntry: LoginEntry = {
    username: "",
    password: ""
  };
  $storage: any;

  public async doLogin() {
    try {
      const d = await loginUserApi(this.loginEntry, this.$axios);
      console.log(d);
      // @ts-ignore
      this.$storage.setUniversal("AuthToken", d.headers.authorization);
    } catch (e) {
      if (e.response) {
        console.error(e.response.data);
      } else {
        // console.error(e);
        // console.log(e.response);
      }
    }
  }

  public async getUser() {
    try {
      const token = this.$storage.getUniversal("AuthToken");
      const d = await getUserApi(token, this.$axios);
      console.log(d.data);
    } catch (e) {
      if (e.response) {
        console.error(e.response.data);
      } else {
        // console.error(e);
        // console.log('kodkodk');
      }
    }
  }
}
</script>

<style scoped></style>
