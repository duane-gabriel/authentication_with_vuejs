<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">E-mail:</label>
      <input v-model="email" id="email" type="text" />
      <label for="password">Senha:</label>
      <input v-model="password" id="password" type="password" />
      <button type="submit">Entrar</button>
      <p>{{ error }}</p>
      Não tem uma conta? <router-link to="/register"> registre-se.</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          this.error = err.response.data
        })
    }
  }
}
</script>

<style>
</style>
