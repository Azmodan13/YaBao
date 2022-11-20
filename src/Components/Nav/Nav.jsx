import './Nav.scss'
import Btn from '../Btn/Btn'
import UpBtn from './UpBtn/UpBtn'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {useAuth} from '../../hooks/use-auth'
import { useDispatch } from 'react-redux'


export default function Nav() {
    const [scroll, setScroll] = useState(0)
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        setScroll(window.scrollY)
    }
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__wrapper">
                    <ul className="nav__list">
                        <li>
                            <Link activeClass="active" to="pizza" smooth={true} offset={-70} duration={500}>
                                Піца
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="soup" smooth={true} offset={-70} duration={500}>
                                Супи
                            </Link>
                        </li>

                        <li>
                            <Link activeClass="active" to="salad" smooth={true} offset={-70} duration={500}>
                                Салати
                            </Link>
                        </li>

                        <li>
                            <Link activeClass="active" to="noodles" smooth={true} offset={-70} duration={500}>
                                Локшина
                            </Link>
                        </li>

                        <li>
                            <Link activeClass="active" to="drink" smooth={true} offset={-70} duration={500}>
                                Напої
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="dessert" smooth={true} offset={-70} duration={500}>
                                Десерти
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="stocks" smooth={true} offset={-70} duration={500}>
                                Акції
                            </Link>
                        </li>

                        <li>
                            <Link activeClass="active" to="contact" smooth={true} offset={-70} duration={500}>
                                Контакты
                            </Link>
                        </li>
                    </ul>

                    <div className="nav__btn__wrapper">
                        
                        <p className="nav__btn__login">
                            {isAuth ? 
                            <RouterLink to="/profile">Особитий кабінет</RouterLink>
                            :
                            <RouterLink to="/login"> Вхід</RouterLink>
                            }
                        </p>
                        <RouterLink to="/basket">
                            <Btn url="basket" btnText={`В кошик |`} />
                        </RouterLink>
                    </div>
                </div>
                <Link activeClass="active" to="logo" smooth={true} offset={-70} duration={500}>
                    {scroll > document.documentElement.clientHeight && <UpBtn />}
                </Link>
            </nav>
        </div>
    )
}
