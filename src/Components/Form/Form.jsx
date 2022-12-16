import './Form.scss'
import { useState } from 'react'
import { emailValidationRules, passwordValidationRules } from '../../utils/ValidationRules'

export default function Form({ submit, handleClick, error, register, errors }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    function onsubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={onsubmit}>
            <label htmlFor="email">
                Ваш e-mail
                <input
                    {...register('email', emailValidationRules)}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors?.email && <span className="errors">{errors?.email?.message || 'Помилка.'}</span>}
            </label>

            <label htmlFor="password">
                Ваш пароль
                <input
                    {...register('password', passwordValidationRules)}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors?.password && <span className="errors">{errors?.password?.message || 'Помилка.'}</span>}
            </label>

            {error ? <p className="error">Невірний email або пароль</p> : ''}
            <button
                className="btn"
                onClick={() => handleClick(email, password)}
                style={{ width: '225px', height: '55px' }}
            >
                {submit}
            </button>
        </form>
    )
}
