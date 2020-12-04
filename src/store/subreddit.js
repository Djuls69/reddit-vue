import { firestoreAction } from 'vuexfire'
import firebase, { db, auth } from '@/firebase/firebase'

const posts = db.collection('posts')

const state = {
  posts: [],
  subreddits: []
}

const getters = {
  subreddit: state => {
    return state.subreddits[0] ? state.subreddits[0] : {}
  }
}

const actions = {
  async createPost({ getters }, post) {
    const res = await posts.doc()
    const user = auth.currentUser
    const newPost = {
      id: res.id,
      user_id: user.uid,
      subreddit_id: getters.subreddit.id,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      updated_at: firebase.firestore.FieldValue.serverTimestamp(),
      ...post
    }

    await posts.doc(newPost.id).set(newPost)
  },
  initPosts: firestoreAction(({ bindFirestoreRef }, subredditId) => {
    return bindFirestoreRef('posts', posts.where('subreddit_id', '==', subredditId))
  }),
  initSubreddit: firestoreAction(({ bindFirestoreRef }, name) => {
    return bindFirestoreRef('subreddits', db.collection('subreddits').where('name', '==', name))
  })
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
