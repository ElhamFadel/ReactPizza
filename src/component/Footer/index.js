import React from 'react';
import {FaFacebook, FaInstagram, FaLink, FaTwitter} from "react-icons/fa";
import {FooterContainer,FooterWraper,SocialMedia,SocialMediaWraper,SocialLogo,SocialIcons,SocialIconLink} from "./FooterElement"

function Footer() {
    return (
        <FooterContainer>
            <FooterWraper>
                <SocialMedia>
                    <SocialMediaWraper>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" aria-label="Youtube" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin" aria-label="Linkedin" rel="noopener noreferrer">
                                <FaLink />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWraper>
                </SocialMedia>
            </FooterWraper>
            
        </FooterContainer>
    )
}

export default Footer
