import React, { useEffect, useState }from "react";
import styled from "styled-components";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import moment from "moment";



export default function Search() {
    const [ startDate, setStartDate ] = useState(moment());
    const [ endDate, setEndDate ] = useState(moment().add(3, "days"));
    const [ focusedInput, setFocusedInput ] = useState(null)

    const onDatesChange = ({startDate, endDate}) => {
        setStartDate(startDate);
        setEndDate(endDate);
    }

    useEffect(() => {
        console.log(startDate.valueOf())
    }, [startDate, endDate])

    return (
        <Body>
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={onDatesChange} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            />
        </Body>
    );
}

const Body = styled.div`
    position: absolute;
    top: 120px;
`