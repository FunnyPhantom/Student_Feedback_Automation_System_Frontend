<template>
  <div>
    <template v-if="!isLoggedIn">
      <v-container class="text-xs-center">
        <v-layout>
          <v-flex>
            کارتابل ثبت موارد دانشجویی
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex>
            برای استفاده از سیستم باید
            <nuxt-link to="/login">وارد شوید</nuxt-link>
            یا
            <nuxt-link to="/register"> ثبت نام</nuxt-link>
            کنید...
          </v-flex>
        </v-layout>
      </v-container>
    </template>
    <template v-else>
      <template v-if="true">
        <student-home-view />
      </template>
    </template>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Getter } from 'nuxt-property-decorator';
import StudentHomeView from '~/components/StudentHomeView.vue';
const authNamespace = 'AuthState';
@Component({
  components: { StudentHomeView }
})
export default class Index extends Vue {
  name: string = 'sjiojoiwjiofj';
  @Getter('isLoggedIn', { namespace: authNamespace }) isLoggedIn;
  @Getter('getLoginLevel', { namespace: authNamespace }) getLoginLevel;

  public async axiosstuff() {
    const d = (await this.$axios.post('/api/v2/employee/register', {
      firstName: 'ali',
      lastName: 'aliabadi',
      username: 'mamadeshoon',
      password: 'passwordeshoon',
      jobTitle: 'jobtitleshoon'
    })).status;
    console.log(d);
  }
}
</script>
<style></style>
