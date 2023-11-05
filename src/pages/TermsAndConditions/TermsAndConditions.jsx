import React, { useEffect } from "react";
import {
  TermsContainer,
  StyledButton,
  TermsContent,
  Title,
  Subtitle,
  Description,
  Links,
  SingleElement,
  SingleLink,
} from "./styles";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms And Conditions";
  }, []);
  return (
    <TermsContainer>
      <Link to="/">
        <StyledButton>
          <KeyboardBackspaceIcon />
        </StyledButton>
      </Link>
      <TermsContent>
        <Title>TERMS AND CONDITIONS OF THE FLOWVIEW APPLICATION</Title>
        <Subtitle>1. Utilization of Materials under Free License</Subtitle>
        <Description>
          1.1. FlowView utilizes materials provided under a free license from
          websites such as:
          <Links>
            <SingleElement>
              <SingleLink
                href="https://rapidapi.com/apidojo/api/tasty"
                target="_blank"
                rel="noreferrer"
              >
                Tasty API
              </SingleLink>
            </SingleElement>
            <SingleElement>
              <SingleLink
                href="https://media.flaticon.com/license/license_editorial.pdf?_ga=2.235194182.676126502.1698770555-1678211452.1698257304&_gl=1*fyxny5*fp_ga*MTY3ODIxMTQ1Mi4xNjk4MjU3MzA0*fp_ga_1ZY8468CQB*MTY5ODc3MDU1NS4yLjEuMTY5ODc3MDU2OC40Ny4wLjA.*test_ga*MTY3ODIxMTQ1Mi4xNjk4MjU3MzA0*test_ga_523JXC6VL7*MTY5ODc3MDU1NS4yLjEuMTY5ODc3MDU2OS40Ni4wLjA"
                target="_blank"
                rel="noreferrer"
              >
                Flaticon
              </SingleLink>
            </SingleElement>
            <SingleElement>
              <SingleLink
                href="https://rapidapi.com/lemur-engine-lemur-engine-default/api/lemurbot/"
                target="_blank"
                rel="noreferrer"
              >
                LemurBot API
              </SingleLink>
            </SingleElement>
            <SingleElement>
              <SingleLink
                href="https://mui.com/"
                target="_blank"
                rel="noreferrer"
              >
                Material-UI (MUI)
              </SingleLink>
            </SingleElement>
            <SingleElement>
              <SingleLink
                href="https://www.iconfinder.com"
                target="_blank"
                rel="noreferrer"
              >
                Iconfinder
              </SingleLink>
            </SingleElement>
          </Links>
          1.2. FlowView users are obliged to adhere to the terms of use of these
          materials, including licenses, usage policies, or any other
          regulations specified by the providers of these materials.
        </Description>
        <Subtitle>2. Utilization of Artificial Intelligence</Subtitle>
        <Description>
          2.1. The FlowView application utilizes artificial intelligence
          provided by{" "}
          <SingleLink
            href="https://chat.openai.com"
            target="_blank"
            rel="noreferrer"
          >
            chat.openai.com{" "}
          </SingleLink>
          to assist users in coding and resolving programming-related issues.
          <br />
          2.2. FlowView users acknowledge that the information and suggestions
          provided by artificial intelligence are offered solely for educational
          purposes and should not be considered as definitive and unconditional
          solutions to programming problems.
        </Description>
        <Subtitle>3. Utilization of Graphic Design Tools</Subtitle>
        <Description>
          3.1. FlowView utilizes{" "}
          <SingleLink
            href="https://www.bing.com/create"
            target="_blank"
            rel="noreferrer"
          >
            Bing Create
          </SingleLink>{" "}
          for creating several graphics used in the application.
          <br />
          3.2. FlowView users accept that graphics created using tools such as
          Bing Create are used for illustrative purposes in the application and
          are not presented as users' own work.
        </Description>
        <Subtitle>4. Final Provisions</Subtitle>
        <Description>
          4.1. Using the FlowView application implies acceptance of these terms
          and conditions.
          <br />
          4.2. FlowView reserves the right to amend these terms and conditions
          at any time, which will be announced on the website or within the
          application.
        </Description>
        <p style={{ marginTop: "20px" }}>Thank you for using FlowView!</p>
      </TermsContent>
    </TermsContainer>
  );
};

export default TermsAndConditions;
