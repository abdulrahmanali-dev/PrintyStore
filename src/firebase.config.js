import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyC0i3CgEjE6Bpn7Bq95HqBiI9nUB3n28b8",
 authDomain: "printy-store.firebaseapp.com",
 projectId: "printy-store",
 storageBucket: "printy-store.appspot.com",
 messagingSenderId: "814587850076",
 appId: "1:814587850076:web:1d60f59332c0af03372599",
 measurementId: "G-MKE1BGC9QD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
