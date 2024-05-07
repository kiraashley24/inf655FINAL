import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAxDMdsVG1anidsKuyXPBF__nY-C9gq_40",
  authDomain: "inf655final.firebaseapp.com",
  projectId: "inf655final",
  storageBucket: "inf655final.appspot.com",
  messagingSenderId: "701561268147",
  appId: "1:701561268147:web:e6d0ff15929ef077fd0dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Iniialize Auth
const auth = getAuth(app);

export {app, auth};