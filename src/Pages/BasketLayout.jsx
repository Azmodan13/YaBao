import BasketHeader from "../Components/Header/BasketHeader/BasketHeader";
import Footer from "../Components/Footer/Footer";
import { Outlet } from 'react-router-dom'

export default function BasketLayout({firstColor,firstText,secondColor, secondText}){

    return(
        <>
        <BasketHeader firstColor={firstColor} firstText={firstText} secondColor={secondColor} secondText={secondText}/>
        <Outlet/>
        <Footer/>
        </>
    )
}
