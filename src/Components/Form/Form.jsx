import './Form.scss'
import { Link } from 'react-router-dom'

export default function Form({ title, submit, footer, link }) {
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
                        <input id="email" required type="email" name="email" />
                        <label htmlFor="password"> Ваш пароль </label>
                        <input id="password" required type="password" name="password" />
                        <button className="btn" style={{ width: '225px', height: '55px' }}>
                            {submit}
                        </button>
                    </form>
                    <p> <Link to={link}>{footer}</Link> </p>
                </div>
            </div>
        </div>
    )
}
