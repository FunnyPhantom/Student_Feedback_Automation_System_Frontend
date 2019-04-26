import { IssueType } from '../models/Issue'
<template>
  <v-dialog :value="value" width="60%" @input="$emit('input', $event)">
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>
          افزودن مورد جدید
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="$emit('input', false)">
          <v-icon>
            close
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
        <v-layout>
          <div class="pb-1" style="min-width: 70px">نوع مورد:</div>
          <div>
            <v-radio-group v-model="issueType" row>
              <v-radio label="شکایت" :value="issueTypeEnum.COMPLAINT" />
              <v-radio label="انتقاد" :value="issueTypeEnum.CRITICISM" />
              <v-radio label="پیشنهاد" :value="issueTypeEnum.PROPOSALS" />
              <v-radio label="درخواست" :value="issueTypeEnum.DEMANDS" />
            </v-radio-group>
          </div>
        </v-layout>
        <v-layout>
          <v-text-field label="عنوان" counter="25"></v-text-field>
        </v-layout>
        <v-layout>
          <v-textarea label="توضیحات" no-resize counter="280" />
        </v-layout>
        <v-layout>
          <v-select label="انتخاب کارمند مربوطه"></v-select>
        </v-layout>
        <v-layout justify-end>
          <v-flex shrink>
            <v-btn color="green" dark @click="submitNewIssue()">
              ثبت مورد
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
// eslint-disable-next-line no-unused-vars
import { IssueType } from '~/models/Issue';

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
    this.$emit('input', false);
  }
}
</script>

<style scoped></style>
