import './OrderLists.scss'
import TotalPrice from '../../Components/CheckOut/TotalPrice/TotalPrice'
import Delivery from '../../Components/CheckOut/Delivery/Delivery'
import { Pay } from '../../Components/Pay/Pay'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { payValidationRules } from '../../utils/ValidationRules'
import { db } from '../../services/firebaseConfig'
import { doc, setDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { clearItem } from '../../Redux/slice/cartSlice'

export default function OrderLists() {
    const user = useSelector((state) => state.persistedReducer.user)
    let cart = useSelector((state) => state.persistedReducer.cart.cart)
    const dispatch = useDispatch() 

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: user.email,
            name: user.name,
            phone: user.phone,
            address: user.address,
            time: '',
            pay: '',
            items: cart
        },
    })

    const payCart = watch('pay')

    async function handleOrder(data, cart) {
        try {
            await setDoc(doc(db, 'orders', data.phone), {
                email: data.email,
                name: data.name,
                phone: data.phone,
                address: data.address,
                time: data.time,
                pay: data.pay,
                items: data.items,
                status: 'new',
                DateOfOrder: Timestamp.fromDate(new Date()),
            })
        } catch (e) {
            console.error('Error adding document: ', e)
        }
        try {
            await updateDoc(doc(db, 'users', data.email), {
                items: '',
                history: data.items
            })
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }

    const onSubmit = (data,cart) => {
        console.log(data)
        handleOrder(data,cart)
        dispatch(clearItem())
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
                                {...register('pay', payValidationRules)}
                                value="cart"
                                type="radio"
                                className="custom-radio"
                                id="cart"
                                name="pay"
                            />
                            <label htmlFor="cart">Карткою на сайті</label>

                            {payCart === 'cart'  && <Pay register={register} errors={errors} />}

                            <input
                                {...register('pay')}
                                type="radio"
                                value="cash"
                                className="custom-radio"
                                id="cash"
                                name="pay"
                            />
                            <label htmlFor="cash">Готівкою</label>

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
