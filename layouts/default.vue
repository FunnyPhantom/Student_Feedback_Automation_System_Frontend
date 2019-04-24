<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <div>
          {{ texts.title }}
        </div>
        <div class="caption grey--text text--darken-1">
          {{ texts.subTitle }}
        </div>
      </v-toolbar-title>
      <v-spacer />
      <template v-if="isLoggedIn">
        <v-toolbar-side-icon @click="toggleNavBar" />
      </template>
      <template v-else>
        <v-toolbar-items>
          <v-btn flat color="primary" to="/register">
            ثبت نام
          </v-btn>
          <v-btn flat color="primary" to="/login">
            ورود
          </v-btn>
        </v-toolbar-items>
      </template>
    </v-toolbar>
    <v-navigation-drawer v-model="showNavBar" app temporary />
    <v-content>
      <div class="mx-auto">
        سلام!
      </div>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  get isLoggedIn(): boolean {
    return true
  }
  texts: { [eng: string]: string } = {
    title: 'بهشتی یار',
    subTitle: 'سامانه ثبت انتقادات و پیشنهادات شهید بهشتی'
  }
  showNavBar: boolean = false
  toggleNavBar() {
    this.showNavBar = !this.showNavBar
  }
}
</script>
