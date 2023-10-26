import React from 'react';
import {
  StyledWrapperItem,
  StyledAssets,
  StyledContent,
  WrapperItem,
} from '../styles';

const Introduction = () => {
  return (
    <StyledWrapperItem>
      <WrapperItem>
        <StyledAssets>IMAGE DASHOBARD</StyledAssets>
        <StyledContent>
          <h2>A place you'll love to return to</h2>
          <p>
            FlowView is the perfect place you will love to visit, it will make
            your daily activities easier and more enjoyable. Our application is
            designed to make using it a pure pleasure.
          </p>
        </StyledContent>
      </WrapperItem>
    </StyledWrapperItem>
  );
};

export default Introduction;
