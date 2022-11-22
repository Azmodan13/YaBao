import './OrderLists.scss'
import TotalPrice from '../../Components/CheckOut/TotalPrice/TotalPrice'
import Delivery from '../../Components/CheckOut/Delivery/Delivery'
import Btn from '../../Components/Btn/Btn'
import { Link } from 'react-router-dom'


export default function OrderLists() {
    

    return (
        <div className="container">
            <div className="flex__container">
                <div className="flex__left">
                    <Delivery />
                </div>
                <TotalPrice />
            </div>
            <div className="flex__left__footer">
                <Link to="/basket"> Назад до кошика</Link>
                <Btn btnText="Оформити замовлення" btnWidth="300px" btnHeight="60px" />
            </div>
        </div>
    )
}
