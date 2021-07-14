import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../logo/logo_transparent.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';

import SignIn from './SignIn';



export default function Header() {
    
    return(
        <Navbar>
            <Link to ="/">
                <Image src={Logo} alt="banner" />
            </Link>
            <Center>
                <Input type="text" />
                <SearchIcon />
            </Center>
            <Right>
                <IconButton>
                    <LanguageIcon />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
                <SignIn />
            </Right> 
        </Navbar>
    );

} 

const Image = styled.img`
    width: 130px;
    object-fit: contain;
`

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    width: 100%;
`

const Center = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    max-width: fit-content;
    margin-left: 10vw;
    padding: 10px;
    height: 50px;
    border: 1px solid #6e6e6e;
    border-radius: 999px;
    &:focus {
        border: 2px solid #3c3c3c;
    }
    `

const Input = styled.input`
    outline: none;
    border: none;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2vw;
`