import './PayAndDelivery.scss'
import pay from '../assets/ico/delivery/pay.png'
import delivery from '../assets/ico/delivery/delivery.png'
import fastDelivery from '../../../assets/ico/delivery/festdelivery.png'
import netbook from '../assets/ico/delivery/netbook.png'

export default function PayAndDelivery() {
    return (
        <div className="PayAndDelivery">
            <div className="container">
                <p className="PayAndDelivery__title">Оплата и доставка</p>
                <div className="PayAndDelivery__items">
                    <div className="PayAndDelivery__item">
                        <img src={pay} alt="pay" />
                        <p>Отлата картой або готівкой при отриманні</p>
                    </div>
                    <div className="PayAndDelivery__item">
                        <img src={delivery} alt="delivery" />
                        <p>Доставка в будь яку частину міста</p>
                    </div>
                    <div className="PayAndDelivery__item">
                        <img src={netbook} alt="netbook" />
                        <p>Оформлення замовлення онлайн</p>
                    </div>
                    <div className="PayAndDelivery__item">
                        <img src={fastDelivery} alt="fastDelivery" />
                        <p>Доставка від 30 хвилин</p>
                    </div>
                </div>
                <div className="PayAndDelivery__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d812.8705902407662!2d30.525849230393515!3d50.449966682889276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf7febd9996b%3A0x59bd3c32b7325c44!2z0JzRg9C30LXQuSDQnNC10LTRg9C3LCBNdXNldW0gb2YgSmVsbHlmaXNo!5e0!3m2!1sru!2sua!4v1665367432385!5m2!1sru!2sua"
                        width="1100"
                        height="350"
                        title="This is a unique title"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
