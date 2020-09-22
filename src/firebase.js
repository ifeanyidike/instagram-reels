import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARufLvoNWwWbMQMq0jRSNP3UKLvLiQtr8",
  authDomain: "instagram-reels-clone-5fe67.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-5fe67.firebaseio.com",
  projectId: "instagram-reels-clone-5fe67",
  storageBucket: "instagram-reels-clone-5fe67.appspot.com",
  messagingSenderId: "796451283878",
  appId: "1:796451283878:web:d4c0b4a63e63081ed66567",
  measurementId: "G-1M41P97BQZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
