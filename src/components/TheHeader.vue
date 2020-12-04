<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/#/">
        Reddit-Vue
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div v-if="!isLoggedIn" class="control">
            <button class="button is-info" @click="login">
              Se Connecter avec Google
            </button>
          </div>
          <div v-if="isLoggedIn" class="control">
            <span class="avatar">
              <figure :style="{ marginRight: '10px' }" class="image is-32x32">
                <img class="is-rounded" :src="user.image" />
              </figure>
              <figcaption>{{ user.name }}</figcaption>
            </span>
            <button class="button is-danger" @click="logout">
              Se Déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout'])
}
</script>

<style scoped>
.control {
  display: flex;
  align-items: center;
}
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}
</style>
