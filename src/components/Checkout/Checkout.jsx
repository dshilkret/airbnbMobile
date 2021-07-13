import checkoutImg from "./checkout.jpg"
import { Link } from 'react-router-dom';

function Checkout() {
    return (
        <div className="text-center m-3 p-2">
            <h2>Thank you for booking :)</h2>
            <img src={checkoutImg} width="40%" alt="checkout" />
            <h1>Have a nice trip!!</h1>
            <Link to={"/"} className="btn btn-primary m-3">Back to Home</Link>
        </div>
    )
}

export default Checkout