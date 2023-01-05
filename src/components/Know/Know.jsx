import React from 'react';
import {
  KnowWrapper,
  KnowContainer,
  LeftKnow,
  RightKnow,
} from './KnowElement';
import KnowImg from '../../img/know.png';
const Know = () => {
  return (
    <>
      <KnowWrapper>
        <KnowContainer>
          <RightKnow>
            <h1>Know Who Is Handling Your Parcel.</h1>
            <p>
             Find info of selected rider in our mobile app for all necessary communication to have a wonderful and soothing experience with MID.
            </p>
          </RightKnow>
          <LeftKnow>
            <img src={KnowImg} alt="multi parcel delivery" />
          </LeftKnow>
        </KnowContainer>
      </KnowWrapper>
    </>
  );
};

export default Know;
