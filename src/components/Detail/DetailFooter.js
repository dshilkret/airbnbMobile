import styled from "styled-components";

const DetailFooter = () => {
    return (
        <Background className="container mt-3 p-3 text-secondary">
            <h3>Explore other options in and around Roberts Creek</h3>
            <h6>More places to stay in Roberts Creek:</h6>
            <p>Apartments · Houses · Bed and breakfasts · Lofts · Villas</p>
        </Background>
    )
}

export default DetailFooter;

const Background = styled.div`
    background-color: #F7F7F7;
`