import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyDR2XNiFSklbsZmFF9x7_hj-Dmiiw83yng",
	authDomain: "facebook-messenger-clone-da0b6.firebaseapp.com",
	databaseURL: "https://facebook-messenger-clone-da0b6.firebaseio.com",
	projectId: "facebook-messenger-clone-da0b6",
	storageBucket: "facebook-messenger-clone-da0b6.appspot.com",
	messagingSenderId: "982036982534",
	appId: "1:982036982534:web:a341f7a31ebe16776dcc87",
	measurementId: "G-CPNZSDM21T",
});

const db = firebaseConfig.firestore();

export default db;
