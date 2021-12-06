import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SociaMediaWrap, WebsiteRights } from './style'
import { animateScroll as scroll } from 'react-scroll/modules'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About us
                            </FooterLinkTitle>
                            <FooterLink to='/'>
                                How it works
                            </FooterLink>
                            <FooterLink to='/'>
                                Careers
                            </FooterLink>
                            <FooterLink to='/'>
                                Terms of Service
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact us
                            </FooterLinkTitle>
                            <FooterLink to='/'>
                                Contact
                            </FooterLink>
                            <FooterLink to='/'>
                                Support
                            </FooterLink>
                            <FooterLink to='/'>
                                Sponsorships
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to='/'>
                                Summit Video
                            </FooterLink>
                            <FooterLink to='/'>
                                Ambassadors
                            </FooterLink>
                            <FooterLink to='/'>
                                Agency
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>
                            <FooterLink to='/'>
                                Instagram
                            </FooterLink>
                            <FooterLink to='/'>
                                Facebook
                            </FooterLink>
                            <FooterLink to='/'>
                                Twitter
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SociaMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            FCB
                        </SocialLogo>
                        <WebsiteRights>FCB - {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SociaMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
