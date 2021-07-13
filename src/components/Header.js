import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import Signin from './SignIn';



export default function Header() {

    
    return(
        <Navbar className="header">
        <Link to ="/">
            <Image img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" />
        </Link>
        <Center>
            <Input type="text" />
        <SearchIcon />
        </Center>
        <Right className="header_right">
        <IconButton>
        <LanguageIcon />
        </IconButton>
        <IconButton>
        <ExpandMore />
        </IconButton>
        <Signin />
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
    margin-left: 180px;
    padding: 10px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 999px;
`

const Input = styled.input`
    outline: none;
    &:focus {
        border: none;
        outline-width: 0;
        padding: 8px;
    }

`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15vw;
    margin-right: 100px;
`