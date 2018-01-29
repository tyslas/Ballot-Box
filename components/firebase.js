import * as firebase from 'firebase';

class FireBase {
    static initialize(){
        firebase.initializeApp({
          apiKey: "AIzaSyBhvtbrHaCx_d4JurOEKKzp-tD8pVUuvAQ",
          authDomain: "ballt-bx.firebaseapp.com",
          databaseURL: "https://ballt-bx.firebaseio.com",
          projectId: "ballt-bx",
          storageBucket: "ballt-bx.appspot.com",
          messagingSenderId: "641405386118"
        })
    }
}

module.exports = FireBase
