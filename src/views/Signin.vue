<template>
  <Authentication class="login">
    <div class="myform form ">
      <div class="logo mb-3">
        <div class="col-md-12 text-center">
          <h1>{{ $t('login.title') }}</h1>
        </div>
      </div>

      <div class="col-md-12 mt-3">
        <p class="text-center">
          <a :href="facebookUrl" class="facebook btn mybtn">
            <i class="fab fa-facebook-square"></i> {{ $t('login.facebook') }}
          </a>
        </p>
      </div>

      <div class="col-md-12">
        <div class="login-or">
          <hr class="hr-or">
          <span class="span-or">{{ $t('login.or') }}</span>
        </div>
      </div>

      <div class="col-md-12 mb-3">
        <p class="text-center">
          <a :href="googleUrl" class="google btn mybtn">
            <i class="fab fa-google"></i> {{ $t('login.google') }}
          </a>
        </p>
      </div>
    </div>
  </Authentication>
</template>

<script>
import Authentication from '../components/AuthenticationTemplate.vue'
import { mapMutations } from 'vuex'
import { TOKEN, USER } from '../store/mutations-type'
import userService from '../services/UserService'

export default {
  name: 'Signin',
  components: {
    Authentication
  },
  data () {
    return {
      googleUrl: process.env.VUE_APP_GOOGLE_AUTHENTICATION,
      facebookUrl: process.env.VUE_APP_FACEBOOK_AUTHENTICATION
    }
  },
  methods: {
    ...mapMutations({
      setToken: TOKEN,
      setUser: USER
    })
  },
  async mounted () {
    const token = this.$route.query.auth_token
    if (token) {
      this.setToken(token)
      const user = await userService.getUser()
      this.setUser(user)
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style scoped>
</style>
