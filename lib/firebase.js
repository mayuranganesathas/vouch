import { initializeApp, getApps } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// if a Firebase instance doesn't exist, create one
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

if (!getApps().length) {
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
