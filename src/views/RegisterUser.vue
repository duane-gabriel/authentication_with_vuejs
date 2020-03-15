<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">Nome:</label>
      <input v-model="name" id="name" type="text" />
      <label for="email">E-mail:</label>
      <input v-model="email" id="email" type="text" />
      <label for="password">Senha:</label>
      <input v-model="password" id="password" type="password" />
      <button type="submit">Registrar</button>
      Já tem uma conta?
      <router-link to="/register">entrar.</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
    }
  }
}
</script>

<style>
</style>
