import React from 'react'
import { HeroWrapper, HeroContainer, TextWrapper, HeroBtn, ImgWrapper } from './HeroElement'
import HeroImg from '../../img/hero.png'
const Hero = () => {
  return (
      <>
          <HeroWrapper>
              <HeroContainer>
                  <TextWrapper>
                      <h1>Mid Parcel, <br /> feel the speed</h1>  
                      <p>Mid Parcel is a courier company that helps you to deliver and pick up packages across the country. We offer reliable and affordable services through our multiple dispatch riders.</p>
                      <HeroBtn>
                          <p>Download the app</p>
                      </HeroBtn>
                  </TextWrapper>
                  <ImgWrapper>
                     <img src={HeroImg} alt="hero"/>
                  </ImgWrapper>
            </HeroContainer>
          </HeroWrapper>
      </>
  )
}

export default Hero