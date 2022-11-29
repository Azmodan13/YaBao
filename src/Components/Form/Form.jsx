import './Form.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Form({ title, submit, footer, link, handelClick, error }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const cart = useSelector((state)=> state.persistedReducer.cart.cart)

    function onsubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="overlay">
                <div className="modal__login">
                    <h1 className="modal__login__title">{title}</h1>
                    <form onSubmit={onsubmit}>
                        <label htmlFor="email"> Ваш e-mail </label>
                        <input
                            id="email"
                            required
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password"> Ваш пароль </label>
                        <input
                            id="password"
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error ? <p className="error">Невірний email або пароль</p> : ''}
                        <button
                            className="btn"
                            onClick={() => handelClick(email, password,cart)}
                            style={{ width: '225px', height: '55px' }}
                        >
                            {submit}
                        </button>
                    </form>
                    <p className="link">
                        <Link to={link}>{footer}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
