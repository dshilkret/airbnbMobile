import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import nearby from "./nearby.jpg";

function Nearby() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return(
        <>
            <h2 className="m-3">Nearby</h2>
            { isMobile && <>
                <div className="container-fluid">
                    <div className="row flex-nowrap overflow-auto">
                        <div className="col-8">
                            <div className="card">
                                <Link to="/search" className="link-secondary">
                                    <img src={nearby} className="card-img-top" alt="nearby" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <Link to="/search" className="link-secondary">
                                    <img src={nearby} className="card-img-top" alt="nearby" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <Link to="/search" className="link-secondary">
                                    <img src={nearby} className="card-img-top" alt="nearby" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
            { !isMobile && <>
                <div className="container-fluid">
                    <div className="row flex-nowrap overflow-auto">
                        <div className="col-3">
                            <div className="card">
                                <Link to="/search" className="link-secondary">
                                    <img src={nearby} className="card-img-top" alt="nearby" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="/search" className="link-secondary">
                                    <img src={nearby} className="card-img-top" alt="nearby" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="/search" className="link-secondary">
                                    <img src={nearby} className="card-img-top" alt="nearby" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="/search" className="link-secondary">
                                    <img src={nearby} className="card-img-top" alt="nearby" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="/search" className="link-secondary">
                                    <img src={nearby} className="card-img-top" alt="nearby" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default Nearby;