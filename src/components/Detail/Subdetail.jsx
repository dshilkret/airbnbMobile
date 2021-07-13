import { Link } from 'react-router-dom';

function Subdetail(props) {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <div className="container rounded border border-secondary text-center p-4 m-4">
                <div className="row">
                    <div className="col-5">
                        <p>{props.rate} x 1 night</p>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <p>{props.rate}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <p>Cleaning fee</p>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <p>$85</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <p>Service fee</p>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <p>$39</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <p>Occupancy taxes and fees</p>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <p>$30</p>
                    </div>
                </div>
                <hr />
                <div className="row h3">
                    <div className="col-5">
                        <p>Total</p>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <p>$343</p>
                    </div>
                </div>
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Confirmed!
                </button> */}
                <Link to="./Checkout" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Confirmed!
                </Link>
            </div>

            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="exampleModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Checkout complete!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Thank you for booking :)
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Subdetail