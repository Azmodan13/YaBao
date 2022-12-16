import './Pay.scss'
import visa from '../../Assets/ico/pay/visa.png'
import pay from '../../Assets/ico/pay/pay.png'
import master from '../../Assets/ico/pay/master.png'
import { cartValidationRules, cviValidationRules } from '../../utils/ValidationRules'

export function Pay({ register, errors }) {
    return (
        <div className="pay__cart">
            <div className="pay__inputs">
                {errors?.cartNumber && <span className="errors">{errors?.cartNumber?.message || 'Помилка.'}</span>}

                <input
                    {...register('cartNumber', cartValidationRules)}
                    type="nubmer"
                    name="cartNumber"
                    placeholder="Введіть номер карти"
                />
                <div className="pay__inputs__small">
                    <input {...register('data')} placeholder="01/01" type="data" name="data" />
                    <input {...register('cvi',cviValidationRules)} type="nubmer" name="cvi" placeholder="cvi" />
                    {errors?.cvi && <span className="errors">{errors?.cvi?.message || 'Помилка.'}</span>}
                </div>
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
