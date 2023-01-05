import styled from "styled-components";

export const DetailWrapper = styled.section`
 padding: 80px 0;
 background: var(--main-color-variant);
`

export const DetailContainer = styled.div`
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

export const LeftDetail = styled.div`
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
    width: 100%;
    transform: translateX(0);
 }
 }
`

export const RightDetail = styled.div`
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
   }
   p{
      font-size: 17px;
   }
 }

 @media screen and (max-width: 885px){
     h1{
       color: var(--main-color);
       max-width: 800px;
     }
 }
 @media screen and (max-width: 430px) {
   width: 100%;
   h1{
      font-size: 30px;
      max-width: 600px;
      color: var(--next-color);
   }
   p{
      font-size: 16px;
   }
 }
`