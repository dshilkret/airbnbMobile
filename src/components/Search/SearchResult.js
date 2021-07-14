import React from 'react';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import styled from 'styled-components';

export default function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <SearchBody>
            <img src={img} alt="" style={{
                    height: '200px',
                    width: '350px',
                    borderRadius: '10px',
                    overflow: 'hidden'
            }} />
            <FavoriteBorderIcon className="searchResult__heart" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '40px'
            }}/>

            <div className='searchResult__info' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingLeft: '20px'
            }}>
                <div className="searchResult__infoTop" style={{
                        width: '40vw',
                }}>
                    <p style={{
                            marginTop: '10px',
                            fontSize: '13px',
                            color: 'gray'
                    }}>{location}</p>
                    <h3 style={{
                            fontWeight: '300',
                            marginTop: '10px'
                    }}>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom" style={{
                     display: 'flex',
                     justifyContent: 'space-between'
                }}>
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" style={{
                                color: 'red'
                        }}/>
                        <p>
                            <strong style={{
                                    display: 'flex',
                                    alignItems: 'center'                                
                            }}>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2 >{price}</h2>
                        <p style={{
                                textAlign: 'right'
                        }}>{total}</p>
                    </div>
                </div>
            </div>
        </SearchBody>
    );
}

const SearchBody = styled.div`
    display: flex;
    position: relative;
    margin: 20px;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    cursor: pointer;
`
