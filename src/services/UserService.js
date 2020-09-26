import axios from 'axios'

const URL_USER = 'user'

class UserService {
  async getUser () {
    const { data } = await axios.get(URL_USER + '/me')
    return data
  }
}

export default new UserService()
