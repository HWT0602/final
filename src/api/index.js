import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore , collection , setDoc , getDocs , doc , deleteDoc } from "firebase/firestore";
import products from "../json/products.json";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQdYYoMvzXKmUzIfiov7ysGXwQn6dmdvw",
  authDomain: "homework-8d626.firebaseapp.com",
  projectId: "homework-8d626",
  storageBucket: "homework-8d626.appspot.com",
  messagingSenderId: "1058600541331",
  appId: "1:1058600541331:web:a2dbcaefc809c07f1b0166",
  measurementId: "G-5HQJHVXWSG"
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);


// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "products");

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (product) => {
    await deleteDoc(doc(db, "products",product.id));
  });

    // ADD NEW DOCS
    products.forEach(async (product) => {
      const docRef = await doc(productsCollection);
      await setDoc(docRef, { ...product, id: docRef.id});
    });
  };

  export const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
 };