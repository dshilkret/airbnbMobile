import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';

export default function Banner() {
    const history = useHistory();
    const [ showSearch, setShowSearch ] = useState(false);

    return (
        <Body>
            <BannerSearch>
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)} className="benner_search_button" variant="outlined">
                {showSearch ? "Hide" : "Search Dates"}
            </Button>
            </BannerSearch>
            <Bannerinfo>

                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </Bannerinfo>
        </Body>
    );
}

const Body = styled.div`
    positon: relative;
    padding: 15px;
    display: flex;
    justify-content: center;
`

const BannerSearch = styled.div`
    flex-direction: column;
    margin: 10px;
`
const Bannerinfo = styled.div`
    flex-direction: column;
    margin: 10px;
`
