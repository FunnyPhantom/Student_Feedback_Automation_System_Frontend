// eslint-disable-next-line no-unused-vars
import { issueArray } from "~/models/MockData";
// eslint-disable-next-line no-unused-vars
import Issue from "~/models/Issue";
// eslint-disable-next-line no-unused-vars
import RegisterEntry from "~/models/RegisterEntry";
// eslint-disable-next-line no-unused-vars
import { NuxtAxiosInstance } from "~/node_modules/@nuxtjs/axios";
// eslint-disable-next-line no-unused-vars
import LoginEntry from "~/models/LoginEntry";

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

const apiUrl = "http://localhost:8082";

export function registerUserApi(
  registerEntry: RegisterEntry,
  axios: NuxtAxiosInstance
) {
  return axios.$post(`${apiUrl}/auth/register`, registerEntry, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export function loginUserApi(loginEntry: LoginEntry, axios: NuxtAxiosInstance) {
  return axios.post(`${apiUrl}/auth/login`, loginEntry, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export function getUserApi(token: string = "", axios: NuxtAxiosInstance) {
  return axios.get(`${apiUrl}/auth/get_user`, {
    headers: {
      Authorization: token
    }
  });
}
