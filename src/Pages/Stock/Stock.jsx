import './Stock.scss'
import StocksItems from '../../Components/Stocks/StocksItems/StocksItems'
import { useSelector } from 'react-redux'

export default function Stock() {
    const dataStock = useSelector((state) => state.stock.stock[0])
    console.log(dataStock)

    return (
        <div className="container">
            <section className="stock__wrapper">
                <p className="title"> Акції </p>
                <div className="stock__items">
                    <StocksItems dataStock={dataStock.stock} />
                </div>
            </section>
        </div>
    )
}
