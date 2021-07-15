import { useMediaQuery } from 'react-responsive';

import exploreIcon from "./exploreIcon.jpg";

const Explore = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <>
            <h2 className="m-3">Explore nearby</h2>
            {isMobile && <>
                <div className="container">
                    <div className="row flex-nowrap overflow-auto">
                        <div className="col-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
            
            {!isMobile && <>
                <div className="container-fluid">
                    <div className="row flex-nowrap overflow-auto">
                        <div className="col-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">Vancouver</h5>
                                                <p className="card-text">15 minute drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}

        </>
    )
}

export default Explore;