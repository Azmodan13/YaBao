import Form from '../Components/Form/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import db from '../services/firebaseConfig'




export default function LogIn() {
    const [error, setEror] = useState(false)
    const push = useNavigate()
    
    const dispatch = useDispatch()

    async function handleLogin  (email, password)  {
        
        const auth = getAuth()
        const docSnap = await getDoc(doc(db, "users", email));
        let userData = docSnap.data()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
                name: userData.name,
                phone: userData.phone,
            }));
            push('/')
        })
        .catch(setEror(true))
        if (!error){

        }
    }
    return (<Form title="Вхід" submit="Увійти" footer="Зареєструватися" link="/regestration" handelClick={handleLogin} error={error} />)
}
