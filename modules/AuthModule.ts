// eslint-disable-next-line no-unused-vars
import { NuxtUniversalStorage } from "~/index";
import { getUserApi } from "~/api";
// eslint-disable-next-line no-unused-vars
import { NuxtAxiosInstance } from "~/node_modules/@nuxtjs/axios";

function isUserLoggedIn(): boolean {
  return false;
}

const authTokenKey = "AuthToken";

async function initializeAuthStore(
  storage: NuxtUniversalStorage,
  axios: NuxtAxiosInstance
) {
  if (storage.getUniversal(authTokenKey) === undefined) {
    return;
  }
  storage.syncUniversal(authTokenKey, undefined);
  const user = (await getUserApi(storage.getUniversal(authTokenKey), axios))
    .data;
  console.log(user);
}

export { isUserLoggedIn, initializeAuthStore, authTokenKey };
