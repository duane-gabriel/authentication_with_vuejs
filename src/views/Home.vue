<template>
  <div class="home">
    <h1>Bem-vindo ao app!</h1>
    <div v-if="!loggedIn">
      Para usar este app você precisa
      <router-link to="/login">entrar</router-link>ou se
      <router-link to="/register">registrar</router-link>.
    </div>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers'

export default {
  computed: {
    ...authComputed
  }
}
</script>
