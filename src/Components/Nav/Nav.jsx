import './Nav.scss'
import Btn from '../Btn/Btn'


export default function Nav() {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__wrapper">
                    <ul className="nav__list">
                        <li>Піца</li>
                        <li>Супи</li>

                        <li>Салати</li>

                        <li>Локшина</li>
                        <li>Напої</li>
                        <li>Напої</li>
                        <li>Десерти</li>
                        <li>Акції</li>

                        <li>Контакты</li>
                    </ul>

                    <div className="nav__btn__wrapper">
                        <p className="nav__btn__login">Вхід </p>

                        <Btn url="basket" btnText={`В кошик |`} />
                    </div>
                </div>
            </nav>
        </div>
    )
}


