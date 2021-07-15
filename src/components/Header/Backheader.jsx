import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import { FiShare, FiHeart } from "react-icons/fi";
import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Backheader() {
    return (
        <Container>
            <Link to ="/search" className="text-secondary h1 ml-5">
                <MdKeyboardArrowLeft />
            </Link>
            <Right>
                <IconButton>
                    <FiShare />
                </IconButton>
                <IconButton>
                    <FiHeart />
                </IconButton>
            </Right> 
        </Container>
    )
}

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