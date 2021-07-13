
import exploreIcon from "./exploreIcon.jpg";
const Explore = () => {
    return (
        <>
            <h2 className="m-3">Explore nearby</h2>
            <div className="card-group">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Vancouver</h5>
                                <p className="card-text">15 minute drive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Vancouver</h5>
                                <p className="card-text">15 minute drive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Vancouver</h5>
                                <p className="card-text">15 minute drive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={exploreIcon} className="img-fluid rounded" width="80px" alt="icon" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Vancouver</h5>
                                <p className="card-text">15 minute drive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore;