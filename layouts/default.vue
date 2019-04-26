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
    <v-navigation-drawer v-model="showNavBar" app temporary>
      <v-list>
        <v-list-tile
          v-for="(listItem, i) in menuItems"
          :key="i"
          :to="listItem.link"
        >
          <v-list-tile-action>
            <v-icon>
              {{ listItem.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            {{ listItem.title }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Getter } from 'nuxt-property-decorator';
import { UserLevels } from '~/models/UserLevels';
// eslint-disable-next-line no-unused-vars
import MenuItem from '~/models/MenuItem';

const AuthNamespace = 'AuthState';

@Component
export default class DefaultLayout extends Vue {
  @Getter('isLoggedIn', { namespace: AuthNamespace }) isLoggedIn?: boolean;
  @Getter('getLoginLevel', { namespace: AuthNamespace }) getLoginLevel;

  showNavBar: boolean = false;

  texts: { [eng: string]: string } = {
    title: 'بهشتی یار',
    subTitle: 'سامانه ثبت انتقادات و پیشنهادات شهید بهشتی'
  };

  NavMenu: Array<MenuItem> = [
    {
      title: 'خانه',
      icon: 'home',
      link: '/',
      userLevel: UserLevels.STUDENT
    },
    {
      title: 'ویرایش نمایه',
      icon: 'settings',
      link: '/editprofile',
      userLevel: UserLevels.STUDENT
    },
    {
      title: 'گزارشات',
      icon: 'bar_chart',
      link: '/reports',
      userLevel: UserLevels.ADMIN
    },
    {
      title: 'مدیریت کاربران',
      icon: 'supervised_user_circle',
      link: '/usermanagement',
      userLevel: UserLevels.ADMIN
    }
  ];
  get menuItems() {
    return this.NavMenu.filter(value => this.getLoginLevel >= value.userLevel);
  }

  toggleNavBar() {
    this.showNavBar = !this.showNavBar;
  }
}
</script>
