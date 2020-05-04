import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBi-si_KXsYrlra1PWMvwiW0Sf0pb84p_M",
  authDomain: "slack-app-2362d.firebaseapp.com",
  databaseURL: "https://slack-app-2362d.firebaseio.com",
  projectId: "slack-app-2362d",
  storageBucket: "slack-app-2362d.appspot.com",
  messagingSenderId: "424041014524",
  appId: "1:424041014524:web:933f8ad4ada81d578e6379",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
