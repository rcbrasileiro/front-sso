import { IS_AUTHENTICATED } from './getters-type'

export default {
  [IS_AUTHENTICATED] (state) {
    return state.token
  }
}
