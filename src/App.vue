<template>
  <div>
    <the-header></the-header>
    <router-view class="container main" />
  </div>
</template>

<script>
import firebase from 'firebase/app'
import store from '@/store'
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const newUser = {
          id: user.uid,
          name: user.displayName,
          image: user.photoURL,
          created_at: firebase.firestore.FieldValue.serverTimestamp()
        }
        firebase
          .firestore()
          .collection('users')
          .doc(newUser.id)
          .set(newUser)
        store.commit('auth/setUser', newUser)
        if (this.$route.path !== '/subreddits') {
          this.$router.push('/subreddits')
        }
      } else {
        store.commit('auth/setUser', null)
      }
    })
  }
}
</script>

<style lang="scss">
.main {
  margin-top: 2em !important;
}
</style>
