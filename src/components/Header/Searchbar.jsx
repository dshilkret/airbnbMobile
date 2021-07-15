import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { useMediaQuery } from 'react-responsive';

import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Searchbar() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return(<>
        { isMobile && <>
            <CenterMobile>
                <div onClick={() => window.history.back()} className="text-secondary h1 ml-5">
                    <MdKeyboardArrowLeft />
                </div>
                <Input type="text" />
                <SearchIcon />
            </CenterMobile>
        </>}
        { !isMobile && <>
            <Center>
                <Input type="text" />
                <SearchIcon />
            </Center>
        </>}
    </>)
}

const Input = styled.input`
    outline: none;
    border: none;
`

const CenterMobile = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    max-width: fit-content;
    margin: auto;
    padding: 10px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #6e6e6e;
    border-radius: 999px;
    &:focus {
        border: 2px solid #3c3c3c;
    }
    `
const Center = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    max-width: fit-content;
    margin: auto;
    margin-right: 10vw;
    padding: 10px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #6e6e6e;
    border-radius: 999px;
    &:focus {
        border: 2px solid #3c3c3c;
    }
    `