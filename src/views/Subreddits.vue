<template>
  <section>
    <aside class="menu">
      <p class="menu-label">
        Subreddits
      </p>
      <h4 v-if="subreddits.length === 0">Loading ...</h4>
      <ul v-else class="menu-list">
        <li v-for="subreddit in subreddits" :key="subreddit.id">
          <router-link :to="`/r/${subreddit.name}`">{{
            subreddit.name[0].toUpperCase() + subreddit.name.slice(1)
          }}</router-link>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  mounted() {
    this.init()
  },
  computed: {
    ...mapState('subreddits', ['subreddits'])
  },
  methods: mapActions('subreddits', ['init'])
}
</script>

<style></style>
