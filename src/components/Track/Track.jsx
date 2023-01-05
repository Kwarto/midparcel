import React from 'react';
import {
  TrackWrapper,
  TrackContainer,
  LeftTrack,
  RightTrack,
  TrackBtn
} from './TrackElement';
import TrackImg from '../../img/tracking.png';
const Track = () => {
  return (
    <>
      <TrackWrapper>
        <TrackContainer>
          <RightTrack>
            <h1>Detailed Parcel Tracking.</h1>
            <p>
              The mobile app allows users to track their parcel. This is a great
              feature as it eliminates doubt and the fear of items not reaching
              intended receiver.
            </p>
            <TrackBtn>
              <p>Download the app</p>
            </TrackBtn>
          </RightTrack>
          <LeftTrack>
            <img src={TrackImg} alt="multi parcel delivery" />
          </LeftTrack>
        </TrackContainer>
      </TrackWrapper>
    </>
  );
};

export default Track;
