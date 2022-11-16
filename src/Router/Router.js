import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Pages/Layout'
import Home from '../Pages/Home'
import Basket from '../Pages/Basket'
import Stock from '../Pages/Stock/Stock'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="stock" element={<Stock />} />
                    <Route path="basket" element={<Basket />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
