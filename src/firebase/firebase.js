import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyBxtl2V6Ee6-UngSqZ7tTI28hGUW5TfHLM',
  authDomain: 'reddit-vue-50bdd.firebaseapp.com',
  projectId: 'reddit-vue-50bdd',
  storageBucket: 'reddit-vue-50bdd.appspot.com',
  messagingSenderId: '300624260269',
  appId: '1:300624260269:web:dca10eef763c4039b6ea24'
})

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase
