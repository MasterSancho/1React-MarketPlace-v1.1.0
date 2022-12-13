import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: 'AIzaSyA8GL1uQyLQ64HxmCVCWdgdKKNkeaYXFOE',
 authDomain: 'market-place-001.firebaseapp.com',
 projectId: 'market-place-001',
 storageBucket: 'market-place-001.appspot.com',
 messagingSenderId: '960096679151',
 appId: '1:960096679151:web:117718f43c79c0418a571a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
