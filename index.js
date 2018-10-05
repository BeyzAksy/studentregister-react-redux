import { AppRegistry } from 'react-native';
import firebase from 'firebase';

import App from './App';

const config = {
  apiKey: 'AIzaSyCDkfRZuX2RSSp8Tu_HAamVYQlNijjvpQI',
  authDomain: 'studentregister-f71d6.firebaseapp.com',
  databaseURL: 'https://studentregister-f71d6.firebaseio.com',
  projectId: 'studentregister-f71d6',
  storageBucket: 'studentregister-f71d6.appspot.com',
  messagingSenderId: '259601292796'
};
firebase.initializeApp(config);

AppRegistry.registerComponent('studentregister', () => App);
