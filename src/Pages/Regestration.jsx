import Form from '../Components/Form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/slice/userSlice'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import { Link ,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Registration() {
    const dispatch = useDispatch()
    const push = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    async function handleRegister(formObject, cart) {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, formObject.email, formObject.password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                        admin: false,
                    }),
                )
                push('/')
            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage)
            })

        try {
            await setDoc(doc(db, 'users', formObject.email), {
                name: '',
                phone: '',
                items: cart,
                DateOfRegistration: Timestamp.fromDate(new Date()),
                admin: false,
            })
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }

    return (
        <>
            <div className="container">
                <div className="overlay">
                    <div className="modal__login">
                        <h1 className="modal__login__title">Регістрація</h1>
                        <Form
                            submit="Зареєструватися"
                            title="Войти"
                            handleClick={handleSubmit(handleRegister)}
                            register={register}
                            errors={errors}
                        />
                        <p className="link">
                            <Link to="/login">Увійти</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
