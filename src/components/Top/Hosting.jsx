import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import hosting from "./hosting.jpg";

function Hosting() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return(
        <>
            <h2 className="m-3">Hosting</h2>
            { isMobile && <>
                <div className="container p-3 card">
                <img src={hosting} className="card-img" width="100%" alt="host" />
                    <div className="card-img-overlay">
                        <h1 className="card-title m-2 text-white">Try hosting</h1>
                        <p className="card-text m-1 text-white">Earn extra income and unlock new opportunities by sharing your space.</p>
                        <Link to="/Detail" className="mx-2 px-1">
                            <button className="btn btn-secondary p-1">Learn more</button>
                        </Link>
                    </div>
                </div>
            </>}
            { !isMobile && <>
                <div className="container p-3 card">
                <img src={hosting} className="card-img" width="100%" alt="host" />
                    <div className="card-img-overlay">
                        <h1 className="card-title m-5 text-white">Try hosting</h1>
                        <h3 className="card-text m-5 text-white">Earn extra income and unlock new opportunities by sharing your space.</h3>
                        <Link to="/Detail" className="mx-5 px-5">
                            <button className="btn btn-secondary p-3">Learn more</button>
                        </Link>
                    </div>
                </div>
            </>}
        </>
    )
}

export default Hosting;