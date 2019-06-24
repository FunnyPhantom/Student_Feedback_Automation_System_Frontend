import { UserLevels } from '~/models/UserLevels';
// eslint-disable-next-line no-unused-vars
// import { User } from '~/models/User';

export const state = () => ({
  loginStatus: UserLevels.NOT_LOGGED_IN,
  currentUser: {}
});

export const getters = {
  isLoggedIn({ loginStatus }) {
    return loginStatus !== UserLevels.NOT_LOGGED_IN;
  },
  getLoginLevel({ loginStatus }) {
    return loginStatus;
  }
};
export const mutations = {
  logout(state) {
    state.loginStatus = UserLevels.NOT_LOGGED_IN;
  },
  lg1(state) {
    state.loginStatus = UserLevels.STUDENT;
  },
  lg2(state) {
    state.loginStatus = UserLevels.ADMIN;
  }
};
