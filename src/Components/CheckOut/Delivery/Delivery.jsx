import './Delivery.scss'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Delivery() {
    const user = useSelector((state) => state.user)
    const [name, setName] = useState(user.name ? user.name : '')
    const [phone, setPhone] = useState(user.phone ? user.phone : '')
    const [address, setAddress] = useState('')




    return (
        <div className="delivery">
            <h1 className="delivery__title">Замовлення на доставку</h1>
            <div className="delivery__form">
                <label htmlFor="name">Ім'я</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} required type="text" name="name" />
                <label htmlFor="number">Номер телефона</label>
                <input id="number" value={phone} onChange={(e) => setPhone(e.target.value)} required type="number" name="number" />
                <label htmlFor="text"> Адреса доставки </label>
                <input id="text" value={address} onChange={(e)=> setAddress(e.target.value)} required type="text" name="text" />
                <label htmlFor="time">Час доставки </label>
                <input id="time" required type="text" name="time" />
            </div>
        </div>
    )
}
