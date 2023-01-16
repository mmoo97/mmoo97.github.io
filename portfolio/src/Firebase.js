// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyDUcMhtHAtcJJFpGV4Yz5SR3Pw7FZGB7R8',

	authDomain: 'personal-website-4da53.firebaseapp.com',

	projectId: 'personal-website-4da53',

	storageBucket: 'personal-website-4da53.appspot.com',

	messagingSenderId: '99591636179',

	appId: '1:99591636179:web:4d4dc84f7c552b3a36c026',

	measurementId: 'G-CTW0R4H1VK'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
