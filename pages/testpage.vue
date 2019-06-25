<template>
  <v-container>
    <v-layout>
      <v-btn @click="registerEmp()"> register emp</v-btn>
      <v-btn @click="registerStud()"> register stud</v-btn>
    </v-layout>
    <v-layout :key="i" v-for="(e, i) in stuff">
      {{ e }}
    </v-layout>
  </v-container>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { Component, Vue } from "nuxt-property-decorator";
// eslint-disable-next-line no-unused-vars
import { EmployeeOutput, StudentOutput } from "~/models";

@Component
export default class TestPage extends Vue {
  stuff: Array<any> = [];
  names = ["foo", "bar", "baz", "aaa", "bbb", "ccc", "ddd"];

  createRandomString(): string {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }

  async registerEmp() {
    const empRand: EmployeeOutput = {
      firstName: this.createRandomString(),
      lastName: this.createRandomString(),
      username: "mamad",
      password: this.createRandomString(),
      jobTitle: this.createRandomString()
    };
    const ans = await this.$axios.$post("/employee/register", empRand);
    console.log(ans);
    this.stuff.push(ans);
  }

  async registerStud() {
    const studRand: StudentOutput = {
      firstName: this.createRandomString(),
      lastName: this.createRandomString(),
      username: "student",
      password: this.createRandomString(),
      studentId: this.createRandomString()
    };
    const ans = await this.$axios.$post("/student/register", studRand);
    console.log(ans);
    this.stuff.push(ans);
  }
}
</script>

<style scoped></style>
