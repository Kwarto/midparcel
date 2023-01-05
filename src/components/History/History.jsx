import React from 'react';
import {
  HistoryWrapper,
  HistoryContainer,
  LeftHistory,
  RightHistory,
} from './HistoryElement';
import HistoryImg from '../../img/history.png';
const History = () => {
  return (
    <>
      <HistoryWrapper>
        <HistoryContainer>
         <LeftHistory>
            <img src={HistoryImg} alt="multi parcel delivery" />
          </LeftHistory>
          <RightHistory>
            <h1>Your Delivery History.</h1>
            <p>
            Past deliveries can be accessed through the mobile app. History must always be documented and be easily accessible for any sort of future intended purposes and our mobile app provides that.
            </p>
          </RightHistory>
        </HistoryContainer>
      </HistoryWrapper>
    </>
  );
};

export default History;
