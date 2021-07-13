import styled from "styled-components";
import Subdetail from "./Subdetail"
import DetailFooter from "./DetailFooter";
import { useHotelContext } from '../../context/HotelContext';

import { BiDoorOpen, BiBed } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { GiForkKnifeSpoon, GiWindow } from "react-icons/gi";
import { FiShare, FiHeart } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { ImStarFull } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { RiParkingBoxLine, RiChargingPile2Line } from "react-icons/ri";

const Detail = () => {
    const { list } = useHotelContext();
    const rate = list.length !== 0 && list.ratePlan.price.current
    return  list.length !== 0 && (
        <div className="container">
            <div className="row">
                <h2>{list.name}</h2>
            </div>
            <div className="row">
                <p className="h5">
                    <span><ImStarFull/></span>{list.guestReviews.rating}
                    ({list.guestReviews.total} reviews)
                    ·
                    {list.address.locality}, {list.address.countryName}
                    <FiShare /> Share
                    <FiHeart /> Save
                </p>
            </div>
            <div className="row m-4">
                    <img src={list.optimizedThumbUrls.srpDesktop} width="500px" alt="house" />
            </div>
            <div className="row">
                <div className="col">
                    <h2>{list.name}</h2>
                    <p>2 guests · 1 bedroom · 1 bed · 1 bath</p>
                    <hr />
                    <h4><BsHouseDoor/>Entire home</h4>
                    <p>You’ll have the tiny house to yourself.</p>
                    <h4><HiOutlineSparkles />Enhanced Clean</h4>
                    <p>This host committed to Airbnb's 5-step enhanced cleaning process. Show more</p>
                    <h4><BiDoorOpen />Self check-in</h4>
                    <p>Check yourself in with the keypad.</p>
                    <hr />
                    <p>The Hideout grew from a vision we had when we moved to the Coast. With the desire to share our dream of living amongst the trees, tucked away from the world, The Hideout was created. Wrapped in hand milled cedar, fir and hemlock this space was designed to remind us to slow down, breathe deep and take it all in.
                    The space
                    You'll have the entire space to yourself that includes 3 small units, each at 100 sq ft. One of the units is a kitchenette, the others are a bedroom and a bathroom. The units are connected by a covered deck and open out onto an outdoor seating area with a fire bowl.</p>
                    <span>Show more<IoIosArrowForward /></span>
                    <hr />
                    <h2>Place for Sleeping</h2>
                    <Sleeping className="card">
                    <Center className="card-body">
                        <BiBed />
                        <h5 className="card-title">Bedroom 1</h5>
                        <p className="card-text">1 king bed</p>
                    </Center>
                    </Sleeping>
                    <hr />
                    <h2>What this place offers</h2>
                    <p><GiForkKnifeSpoon />Kitchen</p>
                    <p><RiParkingBoxLine />Free parking on premises</p>
                    <p><RiChargingPile2Line />EV charger</p>
                    <p><GiWindow />Patio or balcony</p>
                    <button type="button" className="btn btn-outline-secondary">Show all 42 amenities</button>
                    <hr />
                    <h2>Select check-in date</h2>
                    <p>Add your travel dates for exact pricing</p>
                    {/* calender */}
                </div>
                <div className="col">
                    <Subdetail rate={rate} />
                </div>
            </div>
            <div className="row">
                <hr />
                <h5><span><ImStarFull/></span>2 reviews</h5>
                {/* Reviews */}
                <hr />
                <h2>Where you’ll be</h2>
                {/* map */}
                <hr />
                <h4>Roberts Creek, British Columbia, Canada</h4>
                <p>Access to many of the popular mountain biking and hiking trails around Mount Elphinstone Provincial Park is right outside our gate.</p>
                <span>Show more<IoIosArrowForward /></span>
                <hr />
            </div>
            <div className="row">
                <div className="col">
                    <h2>Hosted by Pasley</h2>
                    <p>Joined in June 2021</p>
                    <h5><span><ImStarFull/></span>2 reviews<span><MdVerifiedUser /></span>Identity verified</h5>
                    <p>We are the Evans Family, a family of 5 with 3 small kids! Born and raised in Vancouver, we recently left the big city for a simpler, more purposeful life. We look forward to welcom… <span>read more</span></p>
                    <h5>During your stay</h5>
                    <p>I will be available via text or email during your stay. My family and I live on the property as well in case there is anything else you may need.</p>
                </div>
                <div className="col">
                    <p>Response rate: 100%</p>
                    <p>Response time: within an hour</p>
                    <button type="button" className="btn btn-outline-secondary">Contact host</button>
                    <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                </div>
            </div>
            <hr />
            <h2>Things to know</h2>
            <div className="row">
                <div className="col">
                    <h5>House rules</h5>
                    <p>Check-in: After 3:00 p.m.</p>
                    <p>Checkout: 11:00 a.m.</p>
                    <p>Self check-in with keypad</p>
                    <p>No smoking</p>
                    <p>No pets</p>
                    <p>No parties or events</p>
                    <span>Show more<IoIosArrowForward /></span>
                </div>
                <div className="col">
                    <h5>Health & safety</h5>
                    <p>Committed to Airbnb's enhanced cleaning process.<span>Show more</span></p>
                    <p>Airbnb's social-distancing and other COVID-19-related guidelines apply</p>
                    <p>Security camera/recording device<span>Show more</span></p>
                    <p>Carbon monoxide alarm</p>
                    <p>Smoke alarm</p>
                    <span>Show more<IoIosArrowForward /></span>
                </div>
                <div className="col">
                    <h5>Cancellation policy</h5>
                    <p>Add your trip dates to get the cancellation details for this stay.</p>
                    <span>Add dates<IoIosArrowForward /></span>
                </div>
            </div>
            <DetailFooter />
        </div>
    )
}

export default Detail;

const Sleeping = styled.div`
    width: 200px;
`

const Center = styled.div`
    margin: auto;
    width: 200px;
`