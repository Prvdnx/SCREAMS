import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    documentId
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBcCGFxY0d5cKAzdyOk9NEtBnAu9QWP4Z4",
  authDomain: "vanlife-22d0d.firebaseapp.com",
  projectId: "vanlife-22d0d",
  storageBucket: "vanlife-22d0d.firebasestorage.app",
  messagingSenderId: "594156305447",
  appId: "1:594156305447:web:04d4a50d20df04953ba202"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

/* 
Typically, this approach is unnecessary. Instead, Firebase security rules should be 
configured to restrict van editing to the currently logged-in user.

https://firebase.google.com/docs/rules

This example is retained for educational purposes, highlighting the `documentId()` 
function which enables `where()` filtering on a document's ID property. Standard 
behavior restricts filtering to `data()` properties, precluding usage of `where("id", "==", id)`.

Additionally, this demonstrates chaining multiple `where` filter calls.
*/

// export async function getHostVan(id) {
//     const q = query(
//         vansCollectionRef,
//         where(documentId(), "==", id),
//         where("hostId", "==", "123")
//     )
//     const snapshot = await getDocs(q)
//     const vans = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     return vans[0]
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}