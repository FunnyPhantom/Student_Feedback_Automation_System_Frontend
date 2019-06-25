// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import { CookieAttributes } from "js-cookie";

interface StorageCookieOptions extends CookieAttributes {
  cookie: {
    prefix: string;
    options?: StorageCookieOptions;
  };
}

interface NuxtUniversalStorage {
  setUniversal(key: string, value: any, isJson?: boolean): string;

  getUniversal(key: string, isJson?: boolean): any;

  syncUniversal(key: string, defaultValue: any, isJson?: boolean): any;

  // Local State
  setState(key: string, val: any): string;

  getState(key: string): string;

  watchState(key: string, handler: (newValue: any) => void);

  // Cookies
  setCookie(key: string, val: any, options?: StorageCookieOptions);

  getCookie(key: string, isJson?: boolean): any;

  // Local Storage
  setLocalStorage(key: string, val: any, isJson?: boolean);

  getLocalStorage(key: string, isJson?: boolean): any;
}

declare module "vue/types/vue" {
  interface Vue {
    $storage: NuxtUniversalStorage;
  }
}
