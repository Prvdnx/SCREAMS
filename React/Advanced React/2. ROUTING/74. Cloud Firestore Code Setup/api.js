import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"

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






export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

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