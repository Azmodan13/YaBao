import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import New from '../Components/New/New'
import Item from '../Components/Items/Items'
import Stocks from '../Components/Stocks/Stocks'
import Carusel from '../Components/Carusel/Carusel'
import { useSelector } from 'react-redux'

export default function Home() {
    const product = useSelector((state) => state.menu.menu[0])

    return (
        <div className="container">
            <Header />
            <Nav />
            <Carusel />
            {product ? (
                <>
                    <New data={product.new} /> <Item title={'Піца'} data={product.pizza} id="pizza" />
                    <Item title={'Супи'} data={product.soup} id="soup" />
                    <Item title={'Салати'} data={product.salad} id="salad" />
                    <Item title={'Локшина'} data={product.noodles} id="noodles" />
                    <Item title={'НапоЇ'} data={product.drink} id="drink" />
                    <Item title={'Десерти'} data={product.dessert} id="dessert" />
                </>
            ) : (
                <div> Loading...</div>
            )}
            <Stocks />
            <Footer />
        </div>
    )
}
