import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import SearchResult from "./SearchResult";

import { Link } from 'react-router-dom';


export default function SearchPage() {



    return (
            <div className="body">
            <InfoBox>
                <Info> 02 August to 04 August .2 guests</Info>
                <Info2>Explore nearby</Info2>
                <Button style={{margin: '10px'}} variant="outlined">Cancellation Flexibility</Button>
                <Button style={{margin: '10px'}} variant="outlined">Type of place</Button>
                <Button style={{margin: '10px'}} variant="outlined">Price</Button>
                <Button style={{margin: '10px'}} variant="outlined">Rooms and beds</Button>
                <Button style={{margin: '10px'}} variant="outlined">More filters</Button>
            </InfoBox>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://images.craigslist.org/00000_6VoxNNfDrgOz_0CI0nQ_600x450.jpg"
                location="Private room in center of London"
                title="My Sun Peaks for your Vancouver - dog friendly!"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$90 / night"
                />
            </Link>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://images.craigslist.org/00F0F_citKiLbLZDez_0CI0nl_600x450.jpg"
                location="Private room in center of London"
                title="Vancouver house upstairs for rent 3 bed 1 bath"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$90 / night"
                />
            </Link>


            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://images.craigslist.org/00E0E_dUXn9qNwR3Hz_0CI0nK_600x450.jpg"
                location="Private room in center of London"
                title="GORGEOUS CHEF'S DREAM; My VANCOUVER"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$90 / night"
                />
            </Link>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="2021 Brand new luxury Bright, new and modern 1 bedroom suite"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="$30 / night"
                />
            </Link>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="$40 / night"
                />
            </Link>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="$35 / night"
                />
            </Link>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="$55 / night"
                />
            </Link>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="$60 / night"
                />
            </Link>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="$65 / night"
                />
            </Link>

            <Link to="./Detail" className="text-secondary">
                <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$90 / night"
                />
            </Link>
            </div>
            );
            }
        
const InfoBox = styled.div`
    padding: 20px;
`

const Info = styled.p`
    margin-bottom: 10px;
    font-size: 14px;
`

const Info2 = styled.h1`
    margin-bottom: 30px;
`

