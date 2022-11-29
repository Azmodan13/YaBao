import Router from './Router/Router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from './Redux/data/productSlice'
import { fetchStock } from './Redux/data/stockSlice'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
        dispatch(fetchStock())
    }, [dispatch])

    return <Router />
}

export default App
