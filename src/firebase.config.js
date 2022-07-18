// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCy3b02ve4TkJwbDo2XCZe1Z1IoDSpasK8',
  authDomain: 'real-estate-66d77.firebaseapp.com',
  projectId: 'real-estate-66d77',
  storageBucket: 'real-estate-66d77.appspot.com',
  messagingSenderId: '811762360495',
  appId: '1:811762360495:web:2334f2579b273c91a4745a',
  measurementId: 'G-4QGFBRRZJ6',
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);
const analytics = getAnalytics (app);
export const db = getFirestore ();
