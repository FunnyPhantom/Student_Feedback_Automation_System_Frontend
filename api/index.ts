// eslint-disable-next-line no-unused-vars
import { issueArray } from '~/models/MockData';
// eslint-disable-next-line no-unused-vars
import Issue from '~/models/Issue';

// eslint-disable-next-line require-await
export async function getStuff() {
  return { data: issueArray };
}

// eslint-disable-next-line require-await
export async function getIssueById(
  id: number | string
): Promise<{ data: Issue }> {
  return {
    data: issueArray.filter(value => value.issueId === id)[0]
  };
}
