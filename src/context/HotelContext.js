import React, { useState, useEffect, useContext } from 'react';
// import loadingImg from './img/Spinner-1s-200px.gif';

const HotelContext = React.createContext();

const HotelProvider = ({ children }) => {
    const [list, setList] = useState([]);
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        // setLoading(true)

        fetch("https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=1506246&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&sortOrder=PRICE&locale=en_US&currency=USD", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c1fed9a4acmsh578a26f2c7d936ep165c4ajsn51ea6d3f3fd3",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    })
    .then(response => {
        response.json().then(data => {
            setList(data.data.body.searchResults.results[0])
            // setLoading(false)
        })
    })
    .catch(err => {
        console.error(err);
    });
    }, [])

    return (
        <HotelContext.Provider value={{list}}>
            {children}
        </HotelContext.Provider>
    );
}

const useHotelContext = () => useContext(HotelContext);

export { useHotelContext, HotelProvider as default };