import Form from '../Components/Form/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/slice/userSlice'
import { addToDb, recountTotalValues } from '../Redux/slice/cartSlice'
import { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import { Link ,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function LogIn() {
    const [error, setEror] = useState('')
    const push = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const dispatch = useDispatch()

    async function handleLogin(formObject) {
        const auth = getAuth()
        const docSnap = await getDoc(doc(db, 'users', formObject.email))
        let userData = docSnap.data()
        console.log(userData)

        signInWithEmailAndPassword(auth, formObject.email, formObject.password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                        name: userData.name,
                        phone: userData.phone,
                        admin: userData.admin,
                    }),
                )

                userData.items ? userData.items.map((items) => dispatch(addToDb(items))) : console.log('empty')
                dispatch(recountTotalValues())
                push('/')
            })
            .catch((error) => {
                setEror(true)
            })
    }
    return (
        <div className="container">
            <div className="overlay">
                <div className="modal__login">
                    <h1 className="modal__login__title">Вхід</h1>
                    <Form
                        submit="Увійти"
                        error={error}
                        title="Войти"
                        handleClick={handleSubmit(handleLogin)}
                        register={register}
                        errors={errors}
                    />

                    <p className="link">
                        <Link to="/regestration">Зареєструватися</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
