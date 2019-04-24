export const state = () => ({
  loginStatus: true
})

export const getters = {
  getLgoin({ loginStatus }) {
    return loginStatus
  }
}
