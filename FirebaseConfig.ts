import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';

const firebaseConfig = {
    apiKey: "AIzaSyB_GyCM5FLozf0E80kkJoIy5w0vMfKBRto",
    authDomain: "househeroes-da922.firebaseapp.com",
    projectId: "househeroes-da922",
    storageBucket: "househeroes-da922.firebasestorage.app",
    messagingSenderId: "186728630589",
    appId: "1:186728630589:web:12bd2e214a5ee8c8775d54",
    measurementId: "G-68PQ9DT057"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});