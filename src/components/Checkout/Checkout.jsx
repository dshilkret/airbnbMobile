import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

import Navbar from '../Header/Navbar'
import Backheader from '../Header/Backheader'

import checkoutImg from "./checkout.jpg"

function Checkout() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    // const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    return (<>
        { isMobile && <>
            <Backheader />
            <div className="text-center m-3 p-4">
                <h1 className="my-5">Thank you for booking :)</h1>
                <img src={checkoutImg} width="90%" alt="checkout" />
                <h1 className="my-5">Have a nice trip!!</h1>
                <Link to={"/"} className="btn btn-primary m-3">Back to Home</Link>
            </div>
        </>}
        { !isMobile && <>
            <Navbar />
            <div className="text-center m-3 p-2">
                <h2>Thank you for booking :)</h2>
                <img src={checkoutImg} width="40%" alt="checkout" />
                <h1>Have a nice trip!!</h1>
                <Link to={"/"} className="btn btn-primary m-3">Back to Home</Link>
            </div>
        </>}
    </>)
}

export default Checkout