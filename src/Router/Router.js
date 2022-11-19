import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from '../Pages/HomeLayout'
import BasketLayout from '../Pages/BasketLayout'
import Home from '../Pages/Home'
import Basket from '../Pages/Basket'
import Stock from '../Pages/Stock/Stock'
import LogIn from '../Pages/LogIn'
import Registration from '../Pages/Regestration'
import Profile from '../Pages/Profile'
import OrderLists from '../Pages/OrderLists/OrderLists'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path="stock" element={<Stock />} />
                    <Route path="regestration" element={<Registration />} />{' '}
                    <Route path="profile" element={<Profile />} />
                    <Route path="login" element={<LogIn />} />
                </Route>
                <Route path="basket" element={<BasketLayout firstColor="#FF2E65" firstText="#ffff" />}>
                    <Route path="/basket" element={<Basket />} />
                </Route>
                <Route path="checkout" element={<BasketLayout secondColor="#FF2E65" secondText="#ffff" />}>
                    <Route path="/checkout" element={<OrderLists />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
