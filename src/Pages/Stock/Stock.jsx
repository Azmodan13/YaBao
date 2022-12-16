import './Stock.scss'
import StocksItems from '../../Components/Stocks/StocksItems/StocksItems'
import { useSelector } from 'react-redux'
import { TailSpin } from 'react-loader-spinner'

export default function Stock() {
    const { stock, status } = useSelector((state) => state.stock)

    return (
        <div className="container">
            <section className="stock__wrapper">
                {status === 'loading' && (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '50px',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <TailSpin
                            height="150"
                            width="150"
                            color="#FF2E65"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                        <h1 style={{ marginTop: '40px' }}>Loading...</h1>
                    </div>
                )}
                {status === 'resolved' && (
                    <>
                        <p className="title"> Акції </p>
                        <div className="stock__items">
                            <StocksItems dataStock={stock.stock} />
                        </div>
                    </>
                )}
            </section>
        </div>
    )
}
