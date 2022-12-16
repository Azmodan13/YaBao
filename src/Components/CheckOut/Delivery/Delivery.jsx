import './Delivery.scss'
import { phoneValidationRules, nameValidationRules, validationRules } from '../../../utils/ValidationRules'

export default function Delivery({ register, errors }) {
    return (
        <div className="delivery">
            <h1 className="delivery__title">Замовлення на доставку</h1>
            <div className="delivery__form">
                <label>Ім'я</label>
                <input {...register('name', nameValidationRules)} id="name" type="text" name="name" />
                {errors?.name && <span className="errors">{errors?.name?.message || 'Помилка.'}</span>}
                <label>Номер телефона</label>
                <input {...register('phone', phoneValidationRules)} id="phone" type="tel" name="phone" />
                {errors?.phone && <span className="errors">{errors?.phone?.message || 'Помилка.'}</span>}

                <label>Адреса доставки </label>
                <input {...register('address',validationRules)}  id="address" type="text" name="address" />
                {errors?.address && <span className="errors">{errors?.address?.message || 'Помилка.'}</span>}

                <label>Час доставки </label>
                <input {...register('time',validationRules)} id="time" type="time" name="time" placeholder="Зараз"/>
                {errors?.time && <span className="errors">{errors?.time?.message || 'Помилка.'}</span>}
            </div>
        </div>
    )
}
