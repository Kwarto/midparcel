import React from 'react'
import { HeroWrapper, HeroContainer, TextWrapper, HeroBtn, MidIcon, ImgWrapper } from './HeroElement'
import HeroImg from '../../img/hero.png'
import Icon1 from '../../img/delivered.png'
import Icon2 from '../../img/contactless.png'
import Icon3 from '../../img/transit.png'
const Hero = () => {
  return (
      <>
          <HeroWrapper>
              <HeroContainer>
                  <TextWrapper>
                      <h1>Mid Parcel, <br /> feel the speed.</h1>  
                      <p>Mid Parcel is a courier company that helps you to deliver and pick up packages across the country. We offer reliable and affordable services through our multiple dispatch riders.</p>
                      <HeroBtn>
                          <p>Download the app</p>
                      </HeroBtn>
                  </TextWrapper>
                  <ImgWrapper>
                      <img src={HeroImg} alt="hero" />
                      <MidIcon>
                          <div>
                              <img src={Icon3} alt="" />
                          </div> 
                          <div>
                              <img src={Icon2} alt="" />
                          </div> 
                          <div>
                              <img src={Icon1} alt="" />
                          </div> 
                      </MidIcon>
                  </ImgWrapper>
            </HeroContainer>
          </HeroWrapper>
      </>
  )
}

export default Hero