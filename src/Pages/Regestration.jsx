import Form from '../Components/Form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import db from '../services/firebaseConfig'


export default function Registration() {
    const dispatch = useDispatch()
    const push = useNavigate()

    async function handleRegister(email, password,cart) {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    }),
                )
                push('/')
            })
            .catch(console.error)

        try {
            await setDoc(doc(db, "users", email), {
                name: '',
                phone: '',
                items: cart,
                DateOfRegistration: Timestamp.fromDate(new Date())
            });
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }




    return (
        <Form title="Регістрація" submit="Зареєструватися" footer="Увійти" link="/login" handelClick={handleRegister} />
    )
}
