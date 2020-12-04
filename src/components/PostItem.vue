<template>
  <article class="media">
    <figure class="media-left">
      <p>
        <img class="post-image" :src="isImage(post.URL) ? post.URL : avatar" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <span v-if="!post.URL">
            <strong>{{ post.title }}</strong>
          </span>
          <span v-if="post.URL">
            <a :href="post.URL" target="_blank" rel="noopener noreferrer"
              ><strong>{{ post.title }}</strong></a
            >
          </span>
          <br />
          {{ post.description }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['post', 'avatar'],
  methods: {
    isImage(url) {
      return url.match(/(png|jpg|jpeg|gif)$/)
    }
  }
}
</script>

<style scoped>
.post-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>
