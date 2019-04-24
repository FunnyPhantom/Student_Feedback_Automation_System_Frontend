/* eslint-disable */
import { Student } from '~/models/Users'

export default interface Issue {
  issueType: IssueType
  title: string
  issueDescription?: string
  relatingStudent: Student
  attachment?: any
  relatingEmployee?: any
  issueStatus: IssueStatus
}

enum IssueType {
  COMPLAINT,
  CRITICISM,
  PROPOSALS,
  DEMANDS
}

enum IssueStatus {
  OPEN,
  CLOSED,
  IN_QUEUE,
  POSTPONED
}
