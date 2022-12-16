import './OrderLists.scss'
import TotalPrice from '../../Components/CheckOut/TotalPrice/TotalPrice'
import Delivery from '../../Components/CheckOut/Delivery/Delivery'
import { Pay } from '../../Components/Pay/Pay'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import cart from '../../Assets/ico/pay/cart.svg'
import { payValidationRules } from '../../utils/ValidationRules'

export default function OrderLists() {
    const user = useSelector((state) => state.persistedReducer.user)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: { name: user.name, phone: user.phone, address: '', time: '', pay: '' },
    })

    // const cart = watch('cart')

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="container">
            <div className="flex__container">
                <div className="flex__left">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Delivery register={register} errors={errors} />

                        <div className="pay">
                            <h1> Спосіб оплати</h1>

                            <input
                                {...register('pay', payValidationRules, { required: true })}
                                value={'cart'}
                                type="radio"
                                className="custom-radio"
                                id="cart"
                                name="pay"
                            />
                            <label htmlFor="cart">
                                
                                <img src={cart} alt="cartImg" /> Карткой на сайті
                            </label>

                            <Pay register={register} errors={errors} />

                            <input
                                {...register('pay')}
                                type="radio"
                                value={'cash'}
                                className="custom-radio"
                                id="cash"
                                name="pay"
                            />
                            <label htmlFor="cash">Готівкой</label>

                            {errors?.pay && <span className="errors">{errors?.pay?.message || 'Помилка.'}</span>}
                        </div>

                        <div className="flex__left__footer">
                            <Link to="/basket"> Назад до кошика</Link>

                            <button type="submit" className="btn" style={{ width: '300px', height: '60px' }}>
                                Оформити замовлення
                            </button>
                        </div>
                    </form>
                </div>
                <TotalPrice />
            </div>
        </div>
    )
}
