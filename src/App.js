import Home from "./Pages/Home";
import {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import {fetchProduct} from './Redux/slice/productSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Home/>
  );
}

export default App;
