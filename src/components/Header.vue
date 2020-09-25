<template>
  <nav class="navbar navbar-expanded-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Parc Torre</router-link>
    <div v-if="isAuthenticated" class="d-flex-inline">
      <span>{{ user.name }}</span>
      <button @click="logout" type="button" class="btn btn-link"><i class="fas fa-sign-out-alt"></i></button>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import { IS_AUTHENTICATED } from '../store/getters-type'
import { LOGOUT } from '../store/actions-type'

export default {
  name: 'Header',
  computed: {
    ...mapState([ 'user' ]),
    ...mapGetters({
      isAuthenticated: IS_AUTHENTICATED
    })
  },
  methods: {
    ...mapActions({
      doLogout: LOGOUT
    }),

    async logout () {
      await this.doLogout()

      this.$router.push({ name: 'signin' })
    }
  }
}
</script>
