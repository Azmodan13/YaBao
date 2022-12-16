import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'

export async function useGetUserDoc (email){
    const docSnap = await getDoc(doc(db, 'users', email))
    let userData = docSnap.data()
    return userData
}

