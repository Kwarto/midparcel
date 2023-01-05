import React from 'react'
import { DetailWrapper, DetailContainer, LeftDetail, RightDetail } from './DetailElement'
import MultiImg from '../../img/multi.png'
const Detail = () => {
  return (
    <>
      <DetailWrapper>
        <DetailContainer>
          <LeftDetail>
            <img src={MultiImg} alt="multi parcel delivery" />
          </LeftDetail>
          <RightDetail>
            <h1>Send Multiple Parcels At Your Convenience.</h1>
            <p>Users can send parcels to their clients, friends and loved ones. Any item and size of their choice can be sent. Users also have the opportunity to make multiple orders as well and to different locations. Just the item info, pick-up location and details of receiver is all that is needed to send a parcel.</p>
          </RightDetail>
        </DetailContainer>
      </DetailWrapper>
    </>
  )
}

export default Detail