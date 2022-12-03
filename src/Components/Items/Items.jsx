import './Items.scss'
import { useDispatch } from 'react-redux'
import { addToCart, recountTotalValues } from '../../Redux/slice/cartSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import {db} from '../../services/firebaseConfig'

export default function Item({ data, title, id }) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.persistedReducer.cart.cart)
    const user = useSelector((state) => state.persistedReducer.user.email)

    function handelClick(item) {
        dispatch(addToCart(item))
        dispatch(recountTotalValues())
    }

    async function addToDb(user, cart) {
        try {
            await updateDoc(doc(db, 'users', user), {
                items: cart,
            })
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }

    useEffect(() => {
        if (user) {
            addToDb(user, cart)
        }
    }, [cart])

    return (
        <section className="item__wrapper">
            <p className="title" id={id}>
                {title}
            </p>
            <div className="items">
                {data
                    ? data.map((item, index) => {
                          return (
                              <article key={item.id} id={item.id} className="item">
                                  <img className="item__img" src={item.image} alt={item.name} />
                                  <p className="item__title">{item.name}</p>
                                  <p className="item__description">{item.description}</p>
                                  <div className="item__footer">
                                      <span>{item.price} грн.</span>
                                      <button
                                          className="btn"
                                          style={{ width: '125px', height: '35px' }}
                                          onClick={() => handelClick(item)}
                                      >
                                          В кошик
                                      </button>
                                  </div>
                              </article>
                          )
                      })
                    : null}
            </div>
        </section>
    )
}
