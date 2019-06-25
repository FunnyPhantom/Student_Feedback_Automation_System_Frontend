/* eslint-disable */
import { Employee, Student, User } from "~/models/User";

export default interface Issue {
  issueId: string | number;
  issueType: IssueType;
  title: string;
  issueDescription?: string;
  relatingStudent: Student;
  attachment?: any;
  relatingEmployee?: Employee;
  issueStatus: IssueStatus;
  creationDate: Date;
  actions: Array<IssueAction>;
}

export interface IssueAction {
  readonly index?: number;
  readonly type: { type: IssueActionType; text?: string };
  readonly date: Date;
  readonly byWho: User;
  readonly toWho?: User;
  readonly correspondingIssue: Issue;
}

export enum IssueActionType {
  CREATED,
  CLOSED,
  REFERRED,
  POSTPONED
}

export enum IssueType {
  COMPLAINT,
  CRITICISM,
  PROPOSALS,
  DEMANDS
}

export enum IssueStatus {
  OPEN,
  CLOSED,
  IN_QUEUE,
  POSTPONED
}

export const statusDic: Object = {
  [IssueStatus.OPEN]: {
    icon: "info",
    color: "info",
    helpText: "باز"
  },
  [IssueStatus.CLOSED]: {
    icon: "check_circle",
    color: "success",
    helpText: "بسته"
  },
  [IssueStatus.IN_QUEUE]: {
    icon: "help",
    color: "info",
    helpText: "در حال بررسی"
  },
  [IssueStatus.POSTPONED]: {
    icon: "history",
    color: "warning",
    helpText: "تعویق"
  }
};

export const issueDic: Object = {
  [IssueType.COMPLAINT]: {
    icon: "warning",
    color: "error",
    helpText: "شکایت"
  },
  [IssueType.CRITICISM]: {
    icon: "warning",
    color: "warning",
    helpText: "انتقاد"
  },
  [IssueType.PROPOSALS]: {
    icon: "highlight",
    color: "info",
    helpText: "پیشنهاد"
  },
  [IssueType.DEMANDS]: {
    icon: "warning",
    color: "info",
    helpText: "درخواست"
  }
};
