import './TotalPrice.scss'
import { useSelector } from 'react-redux'

export default function TotalPrice() {
    let cart = useSelector((state) => state.persistedReducer.cart.cart)
    let total = useSelector((state) => state.persistedReducer.cart.totalPrice)

    return (
        <div className="total">
            <h2 className="total__title">Ваше замовлення</h2>
            <ul className="total__list">
                {cart ? 
                cart.map((item) => {
                    return(
                <li key={item.id} className="total__item">
                    <div className="total__item__info">
                        <h3>{item.name}</h3>
                        <span>{item.description}</span>
                    </div>
                    <div className='total__item__price'>
                    <span>{item.quantity} шт </span>
                    <span>{item.price} ₴</span>
                    </div>
                </li>
)
                }) : <div>err</div> }
            </ul>
            <div className="total__price">
                <div className="total__price__text">Сумма замовлення</div>
                <span>{total} Грн</span>
            </div>
            <div className="total__descr">Безкоштовна доставка</div>
        </div>
    )
}
