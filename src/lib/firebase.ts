// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "synapser-a2b21.firebaseapp.com",
    projectId: "synapser-a2b21",
    storageBucket: "synapser-a2b21.appspot.com",
    messagingSenderId: "853590624708",
    appId: "1:853590624708:web:ef09d46074bd73e3c6fc91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function uploadFileToFirebase(image_url: string, name: string) {
    try {
        const response = await fetch(image_url);
        const buffer = await response.arrayBuffer();
        const file_name = name.replace(" ", "") + Date.now + ".jpeg";
        const storageRef = ref(storage, file_name);
        await uploadBytes(storageRef, buffer, {
            contentType: "image/jpeg",
        });
        const firebase_url = await getDownloadURL(storageRef);
        return firebase_url;
    } catch (error) {
        console.error(error);
    }
}
