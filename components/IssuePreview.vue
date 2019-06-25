<template>
  <v-layout>
    <v-flex>
      <v-layout
        @click="openFullIssue()"
        class="pl-3 pt-2 pb-3 round-corner gets-hover"
      >
        <v-flex>
          <v-layout>
            <v-flex>
              <v-layout class="caption grey--text pr-2" v-if="showIssueCreator">
                <div>
                  دانشجوی درخواست دهنده:
                </div>
                <div>
                  {{ issueModel.relatingStudent.name }}
                </div>
              </v-layout>
              <v-layout>
                <v-tooltip class="no-select" top>
                  <template slot="activator">
                    <v-icon
                      :color="issueTypeDic[issueModel.issueType].color"
                      class="pr-1 pl-1"
                    >
                      {{ issueTypeDic[issueModel.issueType].icon }}
                    </v-icon>
                  </template>
                  <template slot="default">
                    <div class="theme--dark">
                      {{ issueTypeDic[issueModel.issueType].helpText }}
                    </div>
                  </template>
                </v-tooltip>
                <div class="subheading">
                  {{ issueModel.title }}
                </div>
              </v-layout>
            </v-flex>
            <v-flex class="text-xs-left">
              <v-tooltip class="no-select" top>
                <template slot="activator">
                  <v-icon :color="statusIconDic[issueModel.issueStatus].color">
                    {{ statusIconDic[issueModel.issueStatus].icon }}
                  </v-icon>
                </template>
                <template slot="default">
                  <div class="theme--dark">
                    {{ statusIconDic[issueModel.issueStatus].helpText }}
                  </div>
                </template>
              </v-tooltip>
            </v-flex>
          </v-layout>
          <v-layout v-if="issueModel.issueDescription">
            <v-flex>
              <div class="caption pr-3">متن مورد:</div>
              <div class="grey--text very-small-text pr-4">
                {{ issueModel.issueDescription }}
              </div>
            </v-flex>
          </v-layout>
          <v-layout
            class="pr-3 pt-3"
            v-if="showRelatingEmployee && issueModel.relatingEmployee"
          >
            <span class="grey--text very-small-text text--darken-2">
              شخص مربوطه:
            </span>
            <span class="grey--text very-small-text text--darken-2">
              {{ issueModel.relatingEmployee.name }} -
              {{ issueModel.relatingEmployee.jobTitle }}
            </span>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider />
    </v-flex>
    <full-issue-dialog
      :issue-id="issueModel.issueId"
      :issue-model="issueModel"
      v-model="showFullIssue"
    />
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
// eslint-disable-next-line no-unused-vars
import Issue, { issueDic, statusDic } from "~/models/Issue";
import FullIssueDialog from "~/components/FullIssueDialog.vue";

@Component({
  components: { FullIssueDialog }
})
export default class IssuePreview extends Vue {
  @Prop({ type: Object, required: true }) issueModel!: Issue;
  @Prop({ type: Boolean, required: false, default: false })
  showIssueCreator?: boolean;
  @Prop({ type: Boolean, required: false, default: true })
  showRelatingEmployee?: boolean;

  showFullIssue: boolean = false;

  openFullIssue() {
    this.showFullIssue = true;
  }

  statusIconDic = statusDic;
  issueTypeDic = issueDic;
}
</script>

<style scoped>
.no-select {
  cursor: default;
  user-select: none;
}

.gets-hover:hover {
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: 100ms ease-in-out;
}

.gets-hover:active {
  background: rgba(0, 0, 0, 0.1);
  transition: 80ms ease-out;
}

.round-corner {
  border-radius: 5px;
}

.very-small-text {
  font-size: 10px;
}
</style>
