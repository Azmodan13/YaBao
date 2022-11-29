import './ProfileForm.scss'
import Btn from '../Btn/Btn'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../Redux/slice/userSlice'
import React from 'react'
import { Link } from 'react-router-dom'
import { setUser } from '../../Redux/slice/userSlice'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { doc, updateDoc } from 'firebase/firestore'
import db from '../../services/firebaseConfig'


export default function ProfileForm() {
    const user = useSelector((state) => state.persistedReducer.user)
    const cart = useSelector((state)=> state.persistedReducer.cart.cart)
    const dispatch = useDispatch()
    const [inputName, setInputName] = useState(user.name ? user.name : '')
    const [inputNumber, setInputNumber] = useState(user.phone ? user.phone : '')
    const [inputEmail, setInputEmail] = useState(user.email ? user.email : '')

    const handlerClick = (event) => {
        dispatch(removeUser())
    }

    async function handleSave(inputName, inputNumber, inputEmail, cart) {
        try {
            await updateDoc(doc(db, 'users', inputEmail), {
                name: inputName,
                phone: inputNumber,
            })
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }

    return (
        <div className="profile">
            <h1 className="profile__title">Особисті данні</h1>
            <div className="profile__form">
                <label htmlFor="name">Ім'я</label>
                <input
                    id="name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    required
                    type="text"
                    name="name"
                />
                <label htmlFor="number">Номер телефона</label>
                <input
                    id="number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    required
                    type="number"
                    name="number"
                />
                <label htmlFor="email"> Ваш e-mail </label>
                <input
                    id="email"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    required
                    disabled={true}
                    type="email"
                    name="email"
                />

                <div onChange={(e) => e.preventDefault()} className="profile__btn">
                    <Btn handelClick={() => handleSave(inputName, inputNumber, inputEmail, cart)} btnText="Зберегти" />

                    <Link to="/">
                        <Btn btnText="Вийти" handelClick={(event) => handlerClick(event)} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
