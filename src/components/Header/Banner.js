import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import topImage from "../../img/top-image.jpg";
import { Button } from '@material-ui/core';

import Search from '../Search/Search';

export default function Banner() {
    const history = useHistory();
    const [ showSearch, setShowSearch ] = useState(false);

    return (
        <Body>
            <BannerSearch>
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)} className="banner_search_button bg-light text-dark p-2" variant="outlined">
                {showSearch ? "Hide" : "Search Dates"}
            </Button>
            </BannerSearch>
            <BannerInfo>
                <Button onClick={() => history.push('/search')} className="bg-light text-dark p-2" variant='outlined'>Explore Nearby</Button>
            </BannerInfo>
        </Body>
    );
}

const Body = styled.div`
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    background: content-box center/100% no-repeat url(${topImage});
`

const BannerSearch = styled.div`
    flex-direction: column;
    margin-top: 50px;
    padding: 20px;
`
const BannerInfo = styled.div`
    flex-direction: column;
    margin-top: 50px;
    padding: 20px;
`
