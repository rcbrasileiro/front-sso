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
          <a href="http://localhost:8080/oauth2/authorize/facebook" class="facebook btn mybtn">
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
          <a href="http://localhost:8080/oauth2/authorize/google" class="google btn mybtn">
            <i class="fab fa-google"></i> {{ $t('login.google') }}
          </a>
        </p>
      </div>
    </div>
  </Authentication>
</template>

<script>
import Authentication from '../components/AuthenticationTemplate.vue'

export default {
  name: 'Signin',
  components: {
    Authentication
  },
  data () {
    return {
      email: '',
      password: '',
      invalidUser: false
    }
  },
  methods: {
  },
  mounted () {
    console.log(this.$route.params)
  }
}
</script>

<style scoped>
</style>
