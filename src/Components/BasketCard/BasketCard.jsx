import './BasketCard.scss'
import BasketItem from './BasketItem/BasketItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import empty from '../../Assets/img/empty.png'

function BasketCard() {
    let cart = useSelector((state) => state.persistedReducer.cart.cart)
    let total = useSelector((state) => state.persistedReducer.cart.totalPrice)

    return (
        <div className="basket__container">
            <h1 className="basket__title"> Кошик</h1>
            <ul className="basket__list">
                {cart.length ? (
                    cart.map((item) => <BasketItem key={item.id} item={item} />)
                ) : (
                    <div className="err">
                        <img src={empty} alt="empty" />
                    </div>
                )}
            </ul>
            <div className="basket__footer">
                <div className="basket__footer__sum">
                    Сумма замовлення:<span>{total} грн</span>
                </div>
                <div className="basket__footer__checkout">
                {cart.length ? (
                    <Link to="/checkout">
                    <button style={{ width: '225px', height: '55px' }} className="btn">
                        Оформити замовлення
                    </button>
                </Link>
                ) : (
                    <Link to="/">
                        <button style={{ width: '225px', height: '55px' }} className="btn">
                            На головну
                        </button>
                    </Link>
                )}
                </div>
            </div>
        </div>
    )
}

export default BasketCard
