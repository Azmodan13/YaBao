import Form from '../Components/Form/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'




export default function LogIn() {
    const [error, setEror] = useState(false)
    const push = useNavigate()
    
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            console.log(user)
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            push('/')
        })
        .catch(setEror(true))
    }
    return (<Form title="Вхід" submit="Увійти" footer="Зареєструватися" link="/regestration" handelClick={handleLogin} error={error} />)
}
