import { USER, TOKEN } from './mutations-type'
import axios from 'axios'

export default {
  [USER] (state, user) {
    state.user = user
  },
  [TOKEN] (state, token) {
    axios.defaults.headers.common.Authorization = token
    axios.defaults.headers.common.auth_token = token
    state.token = token
  }
}
