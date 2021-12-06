import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InFoSection';
import { homeObjOne, homeObjTree, homeObjTwo } from '../components/InFoSection/data';
import Navbar from '../components/Navbar';
import Services from '../components/services';
import Sidebar from '../components/Sidebar';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>   
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjTree}/>
            <Footer />
        </>
    )
}

export default Home
