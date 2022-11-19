import './ProfileForm.scss'
import Btn from '../Btn/Btn'

import React from 'react'

export default function ProfileForm() {
    return (
        <div className="profile">
            <h1 className="profile__title">Особисті данні</h1>
            <div className="profile__form">
                <label htmlFor="name">Ім'я</label>
                <input id="name" required type="text" name="name" />
                <label htmlFor="number">Номер телефона</label>
                <input id="number" required type="number" name="number" />
                <label htmlFor="email"> Ваш e-mail </label>
                <input id="email" required type="email" name="email" />
                <label htmlFor="password"> Ваш пароль </label>
                <input id="password" required type="password" name="password" />
                <Btn btnText="Зберегти" />
            </div>
        </div>
    )
}
