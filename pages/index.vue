<template>
  <div>
    <div>your name is: {{ name }}</div>
    <input v-model="name" aria-label="299" name="name" />
    <v-avatar size="40">
      <img src="https://picsum.photos/70" alt="img" />
    </v-avatar>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  name: string = 'sjiojoiwjiofj'
}
</script>
<style></style>
