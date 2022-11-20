import './ProfileForm.scss'
import Btn from '../Btn/Btn'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../Redux/slice/userSlice'
import React from 'react'
import { Link } from 'react-router-dom'
import { setUser } from '../../Redux/slice/userSlice'
import { useState } from 'react'

export default function ProfileForm() {


    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handlerClick = (name, number) => {
        

    }
    return (
        <div className="profile">
            <h1 className="profile__title">Особисті данні</h1>
            <div className="profile__form">
                <label htmlFor="name">Ім'я</label>
                <input id="name" value={name} onChange={(e)=> setName(e.target.value)} required type="text" name="name" />
                <label htmlFor="number">Номер телефона</label>
                <input id="number" value={number} onChange={(e)=> setNumber(e.target.value)} required type="number" name="number" />
                <label htmlFor="email"> Ваш e-mail </label>
                <input id="email"required type="email" name="email" />
                <label htmlFor="password"> Ваш пароль </label>
                <input id="password" required type="password" name="password" />
                <div className="profile__btn">
                    <Btn btnText="Зберегти" />
                    <Link to="/">
                        <Btn btnText="Вийти" onclick={dispatch(removeUser())} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
