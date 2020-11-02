import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBnK2xdpRLGw_xYWGFwoKOEWg6MfRp49Io',
  authDomain: 'login-2bf97.firebaseapp.com',
  databaseURL: 'https://login-2bf97.firebaseio.com',
  projectId: 'login-2bf97',
  storageBucket: 'login-2bf97.appspot.com',
  messagingSenderId: '614048831043',
  appId: '1:614048831043:web:f4be2a09a2ced7751fe6f6',
  measurementId: 'G-K96E8LW148',
};

const fire = firebase.initializeApp (firebaseConfig);

export default fire;
