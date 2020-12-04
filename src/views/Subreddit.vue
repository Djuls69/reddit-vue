<template>
  <section>
    <button class="button is-info form-button" @click="toggleForm">
      {{ showForm ? 'Fermer le formulaire' : 'Créer un post' }}
    </button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <b-field label="Titre">
        <b-input v-model="post.title" required></b-input>
      </b-field>
      <b-field label="Description">
        <b-input type="textarea" v-model="post.description"></b-input>
      </b-field>
      <b-field label="URL">
        <b-input v-model="post.URL"></b-input>
      </b-field>
      <button type="submit" class="button is-success" :disabled="disableButton">Envoyer</button>
    </form>
    <post-item v-for="post in posts" :key="post.id" :post="post" :avatar="user.image"></post-item>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import PostItem from '@/components/PostItem'

export default {
  components: { PostItem },
  data: () => ({
    post: {
      title: '',
      description: '',
      URL: ''
    },
    showForm: false
  }),
  mounted() {
    this.initSubreddit(this.$route.params.name)
  },
  computed: {
    disableButton() {
      const { title, description, URL } = this.post
      if (title && (description || URL)) {
        return false
      }
      return true
    },
    ...mapState('subreddit', ['posts']),
    ...mapState('auth', ['user']),
    ...mapGetters('subreddit', ['subreddit'])
  },
  watch: {
    '$route.params.name'() {
      this.initSubreddit(this.$route.params.name)
    },
    subreddit() {
      if (this.subreddit.id) {
        this.initPosts(this.subreddit.id)
      }
    }
  },
  methods: {
    ...mapActions('subreddit', ['createPost', 'initPosts', 'initSubreddit']),
    async handleSubmit() {
      const { title, description, URL } = this.post

      if (title && (description || URL)) {
        await this.createPost(this.post)
      }
    },
    toggleForm() {
      this.showForm = !this.showForm
    }
  }
}
</script>

<style scoped>
.form-button {
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
}
</style>
