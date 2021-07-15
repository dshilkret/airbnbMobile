import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../logo/logo_transparent.png';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';

import SignIn from './SignIn';
import Searchbar from './Searchbar';

export default function Navbar() {
    return (
        <Container>
            <Link to ="/">
                <Image src={Logo} alt="banner" />
            </Link>
            <Searchbar />
            <Right>
                <IconButton>
                    <LanguageIcon />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
                <SignIn />
            </Right> 
        </Container>
    )
}

const Image = styled.img`
    width: 130px;
    object-fit: contain;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    width: 100%;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2vw;
`