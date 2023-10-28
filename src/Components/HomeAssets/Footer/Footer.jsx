import React from 'react';
import {
  StyledFooterWrapper,
  AboutShortContent,
  InfoLinks,
  SingleLinks,
  InfoContentWrapper,
  RestInformations,
  StyledQuickLinks,
  StyledLinkQuickMedia,
} from './styles';

import { RiTwitterXFill } from 'react-icons/ri';
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <div style={{ maxWidth: 1250 }}>
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
              <p>Our team</p>
              <p>Safety</p>
            </SingleLinks>
            <SingleLinks>
              <h3>Contact</h3>
              <p>Kontakt: 511 078 422</p>
              <p>Email: flowview@gmail.com</p>
            </SingleLinks>
            <SingleLinks>
              <h3>Useful links</h3>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
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
      </div>
    </StyledFooterWrapper>
  );
};

export default Footer;
