import React from "react";
import {
  StyledFooterWrapper,
  StyledpositioningFooter,
  AboutShortContent,
  InfoLinks,
  SingleLinks,
  InfoContentWrapper,
  RestInformations,
  StyledQuickLinks,
  StyledLinkQuickMedia,
  StyledInfoLinks,
} from "./styles";

import { RiTwitterXFill } from "react-icons/ri";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledpositioningFooter>
        <InfoContentWrapper>
          <AboutShortContent>
            <h3>FlowView</h3>
            <p>
              Our team of passionate programmers who create innovative solutions
              for various projects based on commitment, capability and the
              pursuit of excellence.
            </p>
          </AboutShortContent>
          <InfoLinks>
            <SingleLinks>
              <h3>AboutUs</h3>
              <StyledInfoLinks to="/OurTeam">Our team</StyledInfoLinks>
              <StyledInfoLinks to="/Safety">Safety</StyledInfoLinks>
            </SingleLinks>
            <SingleLinks>
              <h3>Contact</h3>
              <p>Kontakt: 865 329 870</p>
              <p>Email: flowview@gmail.com</p>
            </SingleLinks>
            <SingleLinks>
              <h3>Useful links</h3>
              <StyledInfoLinks to="/PrivacyPolicy">
                Privacy Policy
              </StyledInfoLinks>
              <StyledInfoLinks to="/TermsAndConditions">
                Terms and Conditions
              </StyledInfoLinks>
            </SingleLinks>
          </InfoLinks>
        </InfoContentWrapper>

        <RestInformations>
          <StyledQuickLinks>
            <StyledLinkQuickMedia>
              <RiTwitterXFill size={25} />
            </StyledLinkQuickMedia>
            <StyledLinkQuickMedia>
              <BiLogoFacebook size={25} />
            </StyledLinkQuickMedia>
            <StyledLinkQuickMedia>
              <BiLogoInstagram size={25} />
            </StyledLinkQuickMedia>
            <StyledLinkQuickMedia>
              <BiLogoLinkedin size={25} />
            </StyledLinkQuickMedia>
          </StyledQuickLinks>
          <hr />
          <p>© FlowView. All rights reserved</p>
        </RestInformations>
      </StyledpositioningFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;
