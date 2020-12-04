import { firestoreAction } from 'vuexfire'
import { db } from '@/firebase/firebase'

const state = {
  subreddits: []
}

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('subreddits', db.collection('subreddits'))
  })
}

export default {
  namespaced: true,
  state,
  actions
}
