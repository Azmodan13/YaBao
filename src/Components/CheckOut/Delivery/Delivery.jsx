import './Delivery.scss'
import Btn from '../../Btn/Btn'

export default function Delivery() {
    return (
        <div className="delivery">
            <h1 className="delivery__title">Замовлення на доставку</h1>
            <div className="delivery__form">
                <label htmlFor="name">Ім'я</label>
                <input id="name" required type="text" name="name" />
                <label htmlFor="number">Номер телефона</label>
                <input id="number" required type="number" name="number" />
                <label htmlFor="text"> Адреса доставки </label>
                <input id="text" required type="text" name="text" />
                <label htmlFor="time">Час доставки </label>
                <input id="time" required type="text" name="time" />
            </div>
        </div>
    )
}
