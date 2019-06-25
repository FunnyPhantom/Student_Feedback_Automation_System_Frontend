/* eslint-disable */
import Issue from "~/models/Issue";
import { UserLevels } from "~/models/UserLevels";

export interface User {
  username: string;
  secret: string;
  name: string;
  userLevel: UserLevels;
}

export interface Student extends User {
  createdIssues: Array<Issue>;
}

export interface Employee extends User {
  issuesUnderInvestigation: Array<Issue>;
  jobTitle: string;
}

export class Admin implements Employee {
  issuesUnderInvestigation: Array<Issue> = [];
  jobTitle: string = "default admin";
  name: string = "default admin name";
  secret: string = "default admin secret";
  userLevel: UserLevels = UserLevels.ADMIN;
  username: string = "default_admin_username";

  constructor(name, username, jobTitle) {
    this.name = name;
    this.username = username;
    this.jobTitle = jobTitle;
  }
}
