import styled from 'styled-components';

export const TrackWrapper = styled.section`
  padding: 80px 0;
  background: var(--text-color);
  overflow-x: hidden;
`;

export const TrackContainer = styled.div`
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

export const LeftTrack = styled.div`
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
    img {
      width: 100%;
      transform: translateX(0);
    }
  }
`;

export const RightTrack = styled.div`
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
      color: var(--main-color);
    }
    p{
      font-size: 17px;
    }
  } 
  @media screen and (max-width: 430px) {
    width: 100%;
    h1 {
      font-size: 30px;
      color: var(--next-color);
    }
    p {
      font-size: 16px;
    }
  }
`;

export const TrackBtn = styled.div`
  margin-top: 20px;
  background: var(--main-color);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.253);
  color: var(--next-color);
  cursor: pointer;
  font-weight: 600;
  width: 14rem;
  text-align: center;
  padding: 10px;
  transition: 2s ease;

  &:hover {
    border-radius: 50px;
  }

  @media screen and (max-width: 885px){
    display: flex;
    justify-content: center; 
    background: var(--next-color);
    color: var(--text-color);
 }
  @media screen and (max-width: 430px) {
    display: flex;
    justify-content: center;
    background: var(--main-color);
    color: var(--text-color);
  }
`;
