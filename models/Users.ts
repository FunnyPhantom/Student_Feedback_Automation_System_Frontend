/* eslint-disable */
import Issue from '~/models/Issue'

export interface Users {
  username: string
  password: string
  name: string
}

export interface Student extends Users {
  createdIssues: Array<Issue>
}
