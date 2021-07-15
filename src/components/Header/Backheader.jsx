import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Backheader() {
    return (
        <Container>
            <Link to ="/search" className="text-secondary h1 ml-5">
                <MdKeyboardArrowLeft />
            </Link> 
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