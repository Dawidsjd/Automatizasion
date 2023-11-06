import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Header from "../../Components/HomeAssets/Navbar/Navbar";
import {
  StyledSupportContainer,
  StyledMain,
  StyledWrapper,
  StyledWrapperContent,
  StyledInlineWidget,
} from "./Styles";
import Footer from "../../Components/HomeAssets/Footer/Footer";

const Support = () => {
  useEffect(() => {
    document.title = "Settings";
  }, []);
  return (
    <>
      <Header />
      <StyledSupportContainer>
        <StyledWrapper>
          <StyledWrapperContent>
            <h1>Contact</h1>
            <p>
              We invite you to engage in a complimentary consultation where we
              can discuss the topic you've brought to our attention. Our team is
              here to assist you, and we look forward to a fruitful
              conversation. Please feel free to reach out, and we will be more
              than happy to help. Thank you! 😊
            </p>
          </StyledWrapperContent>
          <StyledMain>
            <InlineWidget
              url="https://calendly.com/flowview/contact"
              styles={{
                height: "700px",
              }}
            />
          </StyledMain>
        </StyledWrapper>
      </StyledSupportContainer>
      <Footer />
    </>
  );
};

export default Support;
