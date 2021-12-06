import React, {useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, 
        HeroContainer, HeroContent, HeroP, HeroH1, VideoBg } from './style'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Natural</HeroH1>
                <HeroP> Hello </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true' >
                        Get started {hover ? < ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
