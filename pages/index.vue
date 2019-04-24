<template>
  <div>
    <div>your name is: {{ name }}</div>
    <input v-model="name" />
    <div class="" id="" />
    <v-avatar size="40">
      <img src="https://picsum.photos/70" />
    </v-avatar>
  </div>
</template>
<script lang="js">
import { VAvatar } from "vuetify/lib"
// import { Vue, Component } from 'vue-property-decorator'

export default {
  component: {
    VAvatar
  },
  data: () => ({
    name: 'mamad'
  })
}
</script>
<style></style>
