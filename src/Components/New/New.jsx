import './New.scss'
import background from '../../Assets/background/top.png'

export default function New({ data }) {
    return (
        <section>
            <div className="container">
                <p className="new__title">Новинки</p>
                <img className="background__top" src={background} alt="background" />
                <div className="new__items">
                    {data ? (
                        data.map((item) => {
                            return (
                                <article key={item.id} className="new__item">
                                    <img className="new__item__img" src={item.image} alt={item.name} />
                                    <div className="new__item__text">
                                        <span className="new__item__titel">{item.name}</span>
                                        <span className="new__item__price"> {item.price} грн</span>
                                    </div>
                                </article>
                            )
                        })
                    ) : (
                        <div>Err</div>
                    )}
                </div>
            </div>
        </section>
    )
}
