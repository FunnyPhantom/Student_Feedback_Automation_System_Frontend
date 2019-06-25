<template>
  <v-dialog :value="value" @input="$emit('input', $event)">
    <v-card>
      <v-toolbar color="accent" dark>
        <v-toolbar-title>
          شرح کامل مورد
        </v-toolbar-title>
      </v-toolbar>
      <template v-if="hasIssueModel">
        <v-container>
          <v-layout class="pb-4">
            <v-flex>
              <v-layout class="grey--text caption">
                عنوان:
              </v-layout>
              <v-layout class="pr-3">
                {{ issueModelData.title }}
              </v-layout>
            </v-flex>
            <v-flex>
              <v-layout align-center>
                <div class="grey--text caption px-2">
                  نوع مورد:
                </div>
                <div>
                  <v-icon :color="issueTypeDic[issueModelData.issueType].color">
                    {{ issueTypeDic[issueModelData.issueType].icon }}
                  </v-icon>
                  {{ issueTypeDic[issueModelData.issueType].helpText }}
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout class="pb-4">
            <v-flex>
              <v-layout class="grey--text caption">
                شرح موضوع
              </v-layout>
              <v-layout class="pr-3">
                {{
                  issueModelData.issueDescription
                    ? issueModelData.issueDescription
                    : "(ندارد.)"
                }}
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-layout align-center>
                <div class="caption grey--text px-2">
                  وضعیت رسیدگی:
                </div>
                <div>
                  <v-icon :color="statusDic[issueModelData.issueStatus].color">
                    {{ statusDic[issueModelData.issueStatus].icon }}
                  </v-icon>
                  {{ statusDic[issueModelData.issueStatus].helpText }}
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
          <hr class="mb-4" />
          <v-layout>
            <v-flex>
              <v-layout>
                <div class="caption grey--text">
                  تاریخچه عملیات ها:
                </div>
              </v-layout>
              <v-layout class="pr-3">
                <v-flex>
                  <v-layout></v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
      <template v-else>
        <v-container>
          <v-layout>
            <v-flex>
              <v-progress-linear indeterminate />
            </v-flex>
          </v-layout>
        </v-container>
      </template>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { getIssueById } from "~/api";
// eslint-disable-next-line no-unused-vars
import Issue, { issueDic, statusDic } from "~/models/Issue";

@Component
export default class FullIssueDialog extends Vue {
  @Prop() value;
  @Prop({ type: [Number, String], required: true }) issueId!: number | string;
  @Prop({ type: Object, required: false })
  issueModel?: Issue | null;
  issueModelData: Issue | null = null;
  issueTypeDic = issueDic;
  statusDic = statusDic;

  get hasIssueModel() {
    return !!this.issueModelData;
  }

  async getIssueModelData() {
    if (this.issueModel) {
      this.issueModelData = this.issueModel;
    } else {
      try {
        this.issueModelData = (await getIssueById(this.issueId)).data;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }

  mounted() {
    this.getIssueModelData(); // we dont need to give attention to returned promise.
  }
}
</script>

<style scoped></style>
