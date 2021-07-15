import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { ImTwitter, ImFacebook, ImInstagram } from 'react-icons/im';
import { RiGlobalLine } from 'react-icons/ri';

function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    return (
        <Background>
            <div className="container-fluid p-3">
                {isMobile && <>
                    <p className="mb-0 text-center">Copyright © 2021 SHIORI SUZUKI</p>
                    <div className="row justify-content-between text-center mb-4">
                        <div className="col">
                            <span className="px-2">Privacy</span>
                        </div>
                        <div className="col">
                            <span className="px-2">Terms</span>
                        </div>
                        <div className="col">
                            <span className="px-2">Sitemap</span>
                        </div>
                        <div className="row justify-content-between text-center">
                            <span className="col-5">
                                <RiGlobalLine />English (CA)
                            </span>
                            <span className="col-4">$ CAD</span>
                            
                            <Icon className="col-1"><ImFacebook /></Icon>
                            <Icon className="col-1"><ImTwitter /></Icon>
                            <Icon className="col-1"><ImInstagram /></Icon>
                        </div>
                    </div>
                </>}
                {!isMobile && <>
                    <div className="row justify-content-between m-4">
                        { isTablet && <>
                            <div className="col-7 text-start">
                                <p className="mb-0">Copyright © 2021 SHIORI SUZUKI</p>
                                <span className="p-1">Privacy</span>
                                <span className="p-1">Terms</span>
                                <span className="p-1">Sitemap</span>
                            </div>
                            <div className="col-5 text-end">
                                <span className="p-1">
                                    <RiGlobalLine />English (CA)
                                </span>
                                <span className="p-1">$ CAD</span>
                                
                                <Icon><ImFacebook /></Icon>
                                <Icon><ImTwitter /></Icon>
                                <Icon><ImInstagram /></Icon>
                            </div>
                        </> }
                        { !isTablet && <>
                            <div className="col-6 text-start">
                                <span className="mb-0 mx-3">Copyright © 2021 SHIORI SUZUKI</span>
                                <span className="p-2">Privacy</span>
                                <span className="p-2">Terms</span>
                                <span className="p-2">Sitemap</span>
                            </div>
                            <div className="col-6 text-end">
                                <span className="p-2">
                                    <RiGlobalLine />English (CA)
                                </span>
                                <span className="p-2">$ CAD</span>
                                
                                <Icon><ImFacebook /></Icon>
                                <Icon><ImTwitter /></Icon>
                                <Icon><ImInstagram /></Icon>
                            </div>
                        </> }
                    </div>
                </>}
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