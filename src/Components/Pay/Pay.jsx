import './Pay.scss'
import visa from '../../Assets/ico/pay/visa.png'
import pay from '../../Assets/ico/pay/pay.png'
import master from '../../Assets/ico/pay/master.png'
import { useState } from 'react'
import { useCreditCardValidator } from 'react-creditcard-validator'

export function Pay({ register, errors }) {
    const [cartNumber, setCartNumber] = useState('')
    const [cartData, setCartData] = useState('')
    const [cartCVC, setCartCVC] = useState('')
    const {
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        meta: { erroredInputs },
    } = useCreditCardValidator()

    return (
        <div className="pay__cart">
            <div className="pay__inputs">
                <input required  {...getCardNumberProps({ onChange: (e) => setCartNumber(e.target.value) })} />
                <p>{erroredInputs.cardNumber && erroredInputs.cardNumber}</p>

                <input  required {...getExpiryDateProps({ onChange: (e) => setCartData(e.target.value) })} />
                <p>{erroredInputs.expiryDate && erroredInputs.expiryDate}</p>

                <input required {...getCVCProps({ onChange: (e) => setCartCVC(e.target.value) })} />
                <p>{erroredInputs.cvc && erroredInputs.cvc}</p>
            </div>
            <div className="pay__info">
                <img src={visa} alt="visa" />
                <img src={pay} alt="pay" />
                <img src={master} alt="master" />
                <p>
                    Платіж безпечній. Ми не зберігаємо данні карт, всі операції проводить банк - платіжна система,
                    сертифікована по міжнародньому стандарту безпеки PCI DSS
                </p>
            </div>
        </div>
    )
}
