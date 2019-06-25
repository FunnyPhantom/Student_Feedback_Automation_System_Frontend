import { IssueType } from '../models/Issue'
<template>
  <v-dialog :value="value" @input="$emit('input', $event)" width="60%">
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>
          افزودن مورد جدید
        </v-toolbar-title>
        <v-spacer />
        <v-btn @click="$emit('input', false)" icon>
          <v-icon>
            close
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
        <v-layout>
          <div class="pb-1" style="min-width: 70px">نوع مورد:</div>
          <div>
            <v-radio-group row v-model="issueType">
              <v-radio :value="issueTypeEnum.COMPLAINT" label="شکایت" />
              <v-radio :value="issueTypeEnum.CRITICISM" label="انتقاد" />
              <v-radio :value="issueTypeEnum.PROPOSALS" label="پیشنهاد" />
              <v-radio :value="issueTypeEnum.DEMANDS" label="درخواست" />
            </v-radio-group>
          </div>
        </v-layout>
        <v-layout>
          <v-text-field counter="25" label="عنوان"></v-text-field>
        </v-layout>
        <v-layout>
          <v-textarea counter="280" label="توضیحات" no-resize />
        </v-layout>
        <v-layout>
          <v-select label="انتخاب کارمند مربوطه"></v-select>
        </v-layout>
        <v-layout justify-end>
          <v-flex shrink>
            <v-btn @click="submitNewIssue()" color="green" dark>
              ثبت مورد
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
// eslint-disable-next-line no-unused-vars
import { IssueType } from "~/models/Issue";

@Component
export default class NewIssueDialog extends Vue {
  @Prop() value;
  issueTypeEnum = IssueType;
  issueType: IssueType | null = null;

  submitNewIssue() {
    // logic goes here

    // closing the dialog
    this.emitClose();
  }

  emitClose() {
    this.$emit("input", false);
  }
}
</script>

<style scoped></style>
