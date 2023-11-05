import React from "react";
import {
  StyledWrapperItem,
  WrapperActivities,
  StyledVisualSection,
  StyledContent,
} from "../styles";
import Image3 from "./../../../../assets/browsing.svg";

const Activities = () => {
  return (
    <StyledWrapperItem>
      <div style={{ maxWidth: 1250 }}>
        <WrapperActivities>
          <StyledContent>
            <h2>A place you'll love to return to</h2>
            <p>
              FlowView is the perfect place you will love to visit, it will make
              your daily activities easier and more enjoyable. Our application
              is designed to make using it a pure pleasure.
            </p>
          </StyledContent>
          <StyledVisualSection>
            <img
              src={Image3}
              alt="SchoolGraphic"
              style={{ width: "100%", height: "100%" }}
            />
          </StyledVisualSection>
        </WrapperActivities>
      </div>
    </StyledWrapperItem>
  );
};

export default Activities;
