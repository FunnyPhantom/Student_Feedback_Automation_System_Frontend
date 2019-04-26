<template>
  <v-container>
    <v-layout align-center>
      <v-flex>
        <div>
          وضعیت درخواست ها
        </div>
      </v-flex>
      <v-flex class="text-xs-left">
        <v-btn dark color="primary" @click="openNewIssueDialog()">
          <v-icon>
            add
          </v-icon>
          <span>
            افزودن مورد جدید
          </span>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-divider class="mt-1" />
    <v-layout>
      <v-flex>
        <template v-for="(issue, i) in userIssues">
          <v-layout :key="i">
            <v-flex>
              <issue-preview :issue-model="issue" show-relating-employee />
            </v-flex>
          </v-layout>
        </template>
      </v-flex>
    </v-layout>
    <new-issue-dialog v-model="showNewIssueDialog" />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
// eslint-disable-next-line no-unused-vars
import Issue from '~/models/Issue';
import { getStuff } from '~/api';
import IssuePreview from '~/components/IssuePreview.vue';
import NewIssueDialog from '~/components/NewIssueDialog.vue';

@Component({
  components: { NewIssueDialog, IssuePreview }
})
export default class StudentHomeView extends Vue {
  userIssues: Array<Issue> = [];
  // populate userIssues is Issues from backend
  getIssues() {
    getStuff().then(value => {
      this.userIssues = value.data;
    });
  }
  showNewIssueDialog: boolean = false;
  openNewIssueDialog() {
    this.showNewIssueDialog = true;
  }
  mounted(): void {
    this.getIssues();
  }
}
</script>

<style scoped></style>
