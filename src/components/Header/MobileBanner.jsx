import styled from 'styled-components';

import topImage from "../../img/top-image.jpg";
import SearchIcon from '@material-ui/icons/Search';


export default function Banner() {
    return (
        <Body>
            <Center>
                <Input type="text" />
                <SearchIcon />
            </Center>
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

const Center = styled.div`
    align-items: center;
    max-width: fit-content;
    margin-top: 20px;
    padding: 10px;
    height: 50px;
    background-color: #fff;
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