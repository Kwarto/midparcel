import styled from 'styled-components';

export const KnowWrapper = styled.section`
  padding: 80px 0;
  background: var(--text-color);
  overflow-x: hidden;
`;

export const KnowContainer = styled.div`
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
`;

export const LeftKnow = styled.div`
  width: 45%;
  img {
    width: 100%;
    transform: translateX(3rem);
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
`;

export const RightKnow = styled.div`
  width: 40%;
  h1 {
    font-size: 50px;
    max-width: 400px;
    color: var(--next-color);
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    text-align: justify;
  }


  @media screen and (max-width: 885px){
    width: 55%;

    h1{
      font-size: 45px;
      max-width: 600px;
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
`;
