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

export const generateImage = async (prompt: string, name: string) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
        "Authorization",
        `Bearer ${process.env.HUGGINGFACE_API_KEY}`
    );

    const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                inputs: prompt,
            }),
            redirect: "follow",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to generate image");
    }

    try {
        const file_name = name.replace(" ", "") + Date.now() + ".jpeg";
        console.log("reached here");
        const storageRef = ref(storage, file_name);
        console.log("reached here");
        const imageBlob = await response.blob();
        console.log("reached here");
        await uploadBytes(storageRef, imageBlob, {
            contentType: "image/jpeg",
        });
        console.log("reached here");

        const firebaseUrl = await getDownloadURL(storageRef);
        console.log("reached here");
        return firebaseUrl;
    } catch (error) {
        console.error(error);
    }
};
