import styled from 'styled-components';

import Searchbar from './Searchbar';

import topImage from "../../img/top-image.jpg";


export default function Banner() {
    return (
        <Body>
            <Bar className="mt-3 mx-auto">
                <Searchbar />
            </Bar>
        </Body>
    );
}

const Body = styled.div`
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    background: content-box center/100% no-repeat url(${topImage});
`
const Bar = styled.div`
    width: 100%;
`