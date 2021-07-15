import styled from 'styled-components'
import { useHotelContext } from '../../context/HotelContext';

import Subdetail from "../Detail/Subdetail"

export default function Confirm() {
    const { list } = useHotelContext();
    return (
        <Box className="text-center my-5 py-4">
            {list.length !== 0 && <Subdetail rate={list.ratePlan.price.current} /> }
        </Box>
    )
}

const Box = styled.div`
    margin-left: -37px;
`