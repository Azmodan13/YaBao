import Nav from '../Components/Nav/Nav'
import New from '../Components/New/New'
import Item from '../Components/Items/Items'
import Stocks from '../Components/Stocks/Stocks'
import Carusel from '../Components/Carusel/Carusel'
import PayAndDelivery from '../Components/PayAndDelivery/PayAndDelivery'
import { useSelector } from 'react-redux'
import { TailSpin } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Home() {
    // const product = useSelector((state) => state.menu.menu[0])
    const { menu, status} = useSelector((state) => state.menu)
    return (
        <>
            <Nav />
            <Carusel />
            <div className="container">
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
                        <New data={menu.new} /> <Item title={'Піца'} data={menu.pizza} id="pizza" />
                        <Item title={'Супи'} data={menu.soup} id="soup" />
                        <Item title={'Салати'} data={menu.salad} id="salad" />
                        <Item title={'Локшина'} data={menu.noodles} id="noodles" />
                        <Item title={'НапоЇ'} data={menu.drink} id="drink" />
                        <Item title={'Десерти'} data={menu.dessert} id="dessert" />
                    </>
                )}
            </div>
            <Stocks />
            <PayAndDelivery />
        </>
    )
}
