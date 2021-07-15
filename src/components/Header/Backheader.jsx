import styled from 'styled-components';

import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Backheader() {
    return (
        <Container>
            <div onClick={() => window.history.back()} className="text-secondary h1 ml-5">
                <MdKeyboardArrowLeft />
            </div> 
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