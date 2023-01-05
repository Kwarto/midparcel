import styled from "styled-components";

export const HeroWrapper = styled.section`
  min-height: calc(100vh - 12vh);
  padding: 50px 0;
  @media screen and (max-width: 885px){
    min-height: 60vh;
  }
  @media screen and (max-width: 430px) {
     min-height: 65vh;
  }
`

export const HeroContainer = styled.div`
 width: var(--container-lg);
 margin: 3% auto;
 display: flex;
 align-items: center;
 justify-content: space-between;

 @media screen and (max-width: 885px){
    margin: 15% auto;
    width: var(--container-md);
  }

 @media screen and (max-width: 430px) {
   flex-direction: column;
   width: var(--container-sm);
   margin: 10% auto;
 }
`

export const TextWrapper = styled.div`
   width: 60%;
   h1{
    font-size: 50px;
    max-width: 400px;
    color: var(--next-color);
   }
   p{
    max-width: 500px;
    font-size: 1.2rem;
    line-height: 1.5;
   }
   @media screen and (max-width: 885px){
     h1{
       color: var(--main-color);
       font-size: 45px;
     }
   }
   @media screen and (max-width: 430px) {
     width: 100%;
     h1{
      font-size: 40px;
      color: var(--next-color);
     }
     p{
    max-width: 800px;
    font-size: 16px;
    text-align: justify;
   }
   } 
`

export const HeroBtn = styled.div`
 margin-top: 20px;
 background: var(--main-color);
 box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.253);
 color: var(--next-color);
 cursor: pointer;
 font-weight: 600;
 width: 14rem;
 text-align: center;
 padding: 10px;
 transition: 2s ease;

 &:hover{
    border-radius: 50px;
 }

 @media screen and (max-width: 885px){
   background: var(--next-color);
   color: var(--text-color);
 }

 @media screen and (max-width: 430px) {
  background: var(--main-color);
  display: flex;
  justify-content: center;
 }
`

export const MidIcon = styled.div`
   display: flex;
   align-items: center;
   gap: 5rem;
   margin-top: 10%;
`

export const ImgWrapper = styled.div`
width: 30%;
 img{
    width: 100%;
 }
 @media screen and (max-width: 430px) {
   width: 100%;
   display: none;
  }
`