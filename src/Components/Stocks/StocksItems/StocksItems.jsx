import Btn from '../../Btn/Btn'

export default function StocksItems({ dataStock }) {
    return (
        <>
            {dataStock ? (
                dataStock.map((item) => {
                    return (
                        <article key={item.id} className="stock__item">
                            <img className="item__img" src={item.image} alt={item.title} />
                            <p className="item__title">{item.title}</p>
                            <p className="item__description">{item.decrtiption}</p>
                            <div className="item__footer">
                                <Btn btnText="Подивитись" btnWidth={'100%'} btnHeight={'35px'} />
                            </div>
                        </article>
                    )
                })
            ) : (
                <div>Err</div>
            )}
        </>
    )
}
