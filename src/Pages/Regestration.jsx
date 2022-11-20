import Form from '../Components/Form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/slice/userSlice'
import {useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Registration() {

        const dispatch = useDispatch()
        const push = useNavigate()
    
        const handleRegister = (email, password) => {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/')
            })
            .catch(console.error)
        }

    return <Form title="Регістрація" submit="Зареєструватися" footer="Увійти" link="/login" handelClick={handleRegister} />
}
