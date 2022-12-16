import './BasketCard.scss'
import Btn from '../Btn/Btn'
import BasketItem from './BasketItem/BasketItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BasketCard() {
    let cart = useSelector((state) => state.persistedReducer.cart.cart)
    let total = useSelector((state) => state.persistedReducer.cart.totalPrice)
    console.log(cart)

    return (
        <div className="basket__container">
            <h1 className="basket__title"> Кошик</h1>
            <ul className="basket__list">
                {cart.length ? (
                    cart.map((item) => <BasketItem key={item.id} item={item} />)
                ) : (
                    <div className="err">
                        <img src="https://www.meme-arsenal.com/memes/6069d1c569579d1cc52343a19e2e3c62.jpg" alt="" />
                    </div>
                )}
            </ul>
            <div className="basket__footer">
                <div className="basket__footer__sum">
                    Сумма замовлення:<span>{total} грн</span>
                </div>
                <div className="basket__footer__checkout">
                    <Link to="/checkout">
                        <Btn btnText="Оформити замовлення" btnWidth="225px" btnHeight="55px" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BasketCard
