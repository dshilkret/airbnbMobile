import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import experience from "./experience.jpg";

function Experience() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return(
        <>
            <h2 className="m-3">Experience</h2>
            { isMobile && <>
                <div className="container-fluid">
                    <div className="row flex-nowrap overflow-auto">
                        <div className="col-8">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
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
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <Link to="search" className="link-secondary">
                                    <img src={experience} className="card-img-top" alt="experience" />
                                    <div className="card-body">
                                    <h5 className="card-title">Outdoor getaways</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural.</p>
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

export default Experience;