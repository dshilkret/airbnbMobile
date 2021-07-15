import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Searchbar() {
    return(<>
        <Center>
            <Link to ="/" className="text-secondary h1 ml-5">
                <MdKeyboardArrowLeft />
            </Link>
            <Input type="text" />
            <SearchIcon />
        </Center>
    </>)
}

const Input = styled.input`
    outline: none;
    border: none;
`

const Center = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    max-width: fit-content;
    margin-left: 15vw;
    padding: 10px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #6e6e6e;
    border-radius: 999px;
    &:focus {
        border: 2px solid #3c3c3c;
    }
    `
