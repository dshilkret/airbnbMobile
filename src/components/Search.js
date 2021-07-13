import React, { useState }from "react";
import styled from "styled-components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People"
import { useHistory } from "react-router-dom";



export default function Search() {

    const history = useHistory();
    const [ startDate, setStartDate ] = useState(new Date());
    const [ endDate, setEndDate ] = useState(new Date());
    const selectionRage = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    return (
        <Body>
            <DateRangePicker ranges={[selectionRage]} onClick={handleSelect} />
            <H2>Number of guests <PeopleIcon/></H2>
            <Input min={0} defaultValue={2} type="number" />
            <Submit><Button onClick={() => history.push('./search')}>Search Airbnb</Button></Submit>
        </Body>

    );
}

const Body = styled.div`
    position: absolute;
    top: 183px;
    left: 31%;
    width: 100vw;
`

const H2 = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 558px;
    padding: 10px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 335px;
`

const Input = styled.input`
    width: 558px;
    padding: 20px;
    position: absolute;
    left: 0;
    height: 30px;
    top: 390px;
    border: none;
        &:focus {
            outline-width: 0;
        }
`
const Submit = styled.button`
        position: absolute;
        left: 0;
        top: 430px;
        text-transform: ingerit;
        background-color: #ff7779;
        color: white;
        width: 560px;
`