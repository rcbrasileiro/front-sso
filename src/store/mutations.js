import { USER } from './mutations-type'

export default {
  [USER] (state, user) {
    state.user = user
  }
}
