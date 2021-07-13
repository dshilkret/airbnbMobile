import { ImTwitter, ImFacebook, ImInstagram } from 'react-icons/im';
import { RiGlobalLine } from 'react-icons/ri';
import styled from 'styled-components';

function Footer() {
    return (
        <Background>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-4">
                    © 2021 Airbnb, Inc.
                    Privacy
                    Terms
                    Sitemap
                    </div>
                    <div className="col-4">
                        <RiGlobalLine />English (CA)
                        $ CAD
                        <Icon><ImFacebook /></Icon>
                        <Icon><ImTwitter /></Icon>
                        <Icon><ImInstagram /></Icon>
                    </div>
                </div>
            </div>
        </Background>
    )
}

export default Footer;

const Background = styled.div`
background-color: #F7F7F7;
`
const Icon = styled.span`
padding: 10px;
`