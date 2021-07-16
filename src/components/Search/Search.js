import React, { useEffect, useState }from "react";
import styled from "styled-components";
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People"
import { useHistory } from "react-router-dom";
import moment from "moment";



export default function Search() {

    const history = useHistory();
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
            {/* <H2>Number of guests <PeopleIcon/></H2>
            <Input min={0} defaultValue={2} type="number" />
            <Submit><Button onClick={() => history.push('./search')}>Search Airbnb</Button></Submit> */}
        </Body>
    );
}

const Body = styled.div`
    position: absolute;
    top: 120px;
    /* left: 10px; */
    /* width: 300px; */
    /* z-index: 999; */
`

// const H2 = styled.h2`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 558px;
//     padding: 10px;
//     background-color: white;
//     position: absolute;
//     left: 0;
//     top: 335px;
// `

// const Input = styled.input`
//     width: 558px;
//     padding: 20px;
//     position: absolute;
//     left: 0;
//     height: 30px;
//     top: 390px;
//     border: none;
//         &:focus {
//             outline-width: 0;
//         }
// `
// const Submit = styled.button`
//         position: absolute;
//         left: 0;
//         top: 430px;
//         text-transform: inherit;
//         background-color: #ff7779;
//         color: white;
//         width: 560px;
// `