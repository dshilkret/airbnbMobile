import { useMediaQuery } from 'react-responsive';

import Navbar from '../Header/Navbar';
import Banner from '../Header/Banner';
import MobileBanner from '../Header/MobileBanner';

export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    
    return (<>
        {isMobile && <>
            <MobileBanner />
        </>}
        {!isMobile && <>
            <Navbar />
            <Banner />
        </>}
    </>)
} 