export default function({ store, redirect }) {
  if (!store.getters['AuthState/getLogin']) {
    redirect('/');
  }
}
