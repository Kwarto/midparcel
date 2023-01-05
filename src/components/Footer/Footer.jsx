import React from 'react'
import {FooterWrapper, FooterContainer, FooterItem, CopyWrapper} from './FooterElement'
const Footer = () => {
  
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <FooterItem>
            <h2>Mid Parcel</h2>
            <h5>Mid Parcel is a courier company that helps you to deliver and pick up packages across the country.</h5>
          </FooterItem>
          <FooterItem>
            <h2>Quick Links</h2>
            <p>Overview</p>
            <p>Parcel</p>
            <p>Delivery</p>
            <p>Products</p>
          </FooterItem>
          <FooterItem>
            <h2>Legal Terms</h2>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Return Policy</p>
            <p>Cancelation Policy</p>
          </FooterItem>
          <FooterItem>
            <h2>Help Center</h2>
            <p>24 / 7 Support</p>
            <p>FAQs</p>
            <p>Follow Us</p>
            <p>NewsLetter</p>
          </FooterItem>
        </FooterContainer>
      </FooterWrapper>
      <CopyWrapper>
        <p>All Copyright Reserved &copy; 2023</p>
      </CopyWrapper>
    </>
  )
}

export default Footer