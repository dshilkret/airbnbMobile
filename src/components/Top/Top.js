import Explore from './Explore';
import TopFooter from './TopFooter';
import { Link } from 'react-router-dom';

import topImage from "./top-image.jpg";
import experience from "./experience.jpg";
import nearby from "./nearby.jpg";
import hosting from "./hosting.jpg";
import Banner from '../Banner';

function Top() {
    return (
        <>
            <Banner />
            <img src={topImage} width="100%" alt="top" />
            <Explore />

            <h2 className="m-3">Nearby</h2>
            <div className="card-group">
                <div className="card">
                    <Link to="/search" className="link-secondary">
                        <img src={nearby} className="card-img-top" alt="nearby" />
                        <div className="card-body">
                        <h5 className="card-title">Outdoor getaways</h5>
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/search" className="link-secondary">
                        <img src={nearby} className="card-img-top" alt="nearby" />
                        <div className="card-body">
                        <h5 className="card-title">Outdoor getaways</h5>
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/search" className="link-secondary">
                        <img src={nearby} className="card-img-top" alt="nearby" />
                        <div className="card-body">
                        <h5 className="card-title">Outdoor getaways</h5>
                        </div>
                    </Link>
                </div>
            </div>


            <h2 className="m-3">Hosting</h2>
            <div className="card bg-dark text-white">
            <img src={hosting} className="card-img" width="90%" alt="host" />
                <div className="card-img-overlay">
                    <h5 className="card-title">Try hosting</h5>
                    <p className="card-text">Earn extra income and unlock new opportunities by sharing your space.</p>
                    <Link to="/Detail" className="btn btn-secondary">Learn more</Link>
                </div>
            </div>


            <h2 className="m-3">Experience</h2>
            <div className="card-group">
                <div className="card">
                    <Link to="search" className="link-secondary">
                        <img src={experience} className="card-img-top" alt="experience" />
                        <div className="card-body">
                        <h5 className="card-title">Outdoor getaways</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="search" className="link-secondary">
                        <img src={experience} className="card-img-top" alt="experience" />
                        <div className="card-body">
                        <h5 className="card-title">Outdoor getaways</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="search" className="link-secondary">
                        <img src={experience} className="card-img-top" alt="experience" />
                        <div className="card-body">
                        <h5 className="card-title">Outdoor getaways</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <TopFooter />
        </>
    )
}

export default Top;
