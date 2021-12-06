import React from 'react'
import Icon1 from '../../images/1.svg';
import Icon2 from '../../images/2.svg';
import Icon3 from '../../images/3.svg';
import { ServiceCard, ServicesContainer, ServicesH1, ServicesH2, 
            ServicesIcon, ServicesWrapper, ServicesP } from './style';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1> Our services</ServicesH1>
            <ServicesWrapper>
                <ServiceCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Reduce expenses</ServicesH2>
                    <ServicesP> We help reduce your fess and increase your overall revenue</ServicesP>
                </ServiceCard>
                <ServiceCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Vitural Offices </ServicesH2>
                    <ServicesP> You can access our platform online anywhere in the world.</ServicesP>
                </ServiceCard>
                <ServiceCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Premium Benefits </ServicesH2>
                    <ServicesP> Unlock our special membership card.</ServicesP>
                </ServiceCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
