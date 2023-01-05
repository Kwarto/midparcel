import styled from "styled-components";

export const HistoryWrapper = styled.section`
 padding: 80px 0;
 background: var(--main-color-variant);
 overflow-x: hidden;
`

export const HistoryContainer = styled.div`
 width: var(--container-lg);
 margin: 0 auto;
 display: flex;
 align-items: center;
 justify-content: space-between;

 @media screen and (max-width: 885px){
    width: var(--container-md);
 }

 @media screen and (max-width: 430px) {
   flex-direction: column;
   width: var(--container-sm);
 }
`

export const LeftHistory = styled.div`
 width: 45%;
 img{
    width: 100%;
    transform: translateX(-4rem);
 }

 @media screen and (max-width: 885px){
    width: 45%;
 }

 @media screen and (max-width: 430px) {
   width: 100%;
    img{
      transform: translateX(0);
    }
 }
`

export const RightHistory = styled.div`
width: 40%;
 h1{
    font-size: 50px;
    max-width: 400px;
    color: var(--next-color);
 }

 p{
    font-size: 1.2rem;
    max-width: 600px;
    text-align: justify;
 }

 @media screen and (max-width: 885px){
    width: 55%;

    h1{
      font-size: 45px;
      color: var(--main-color);
    }

    p{
      font-size: 17px;
    }
 }

 @media screen and (max-width: 430px) {
   width: 100%;

   h1{
      font-size: 30px;
      color: var(--next-color);
   }
   p{
      font-size: 16px;
   }
 }
`
