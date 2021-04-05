import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1d924zM2SAztdejb-nUTZP8zhgZiW4j0",
  authDomain: "recipe-add-d0eb5.firebaseapp.com",
  databaseURL: "https://recipe-add-d0eb5-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
