import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  min-height: 60vh;
  background: var(--footer-color);
  display: flex;
  align-items: center;
  @media screen and (max-width: 885px){
    min-height: 40vh;
    padding: 10px 0;
 }
  @media screen and (max-width: 430px) {
    min-height: 80vh;
    padding: 60px 0;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: var(--container-lg);
  margin: 0 auto;

  @media screen and (max-width: 885px){
    width: var(--container-sm);
    grid-template-columns: repeat(4, 1fr);
 }

  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterItem = styled.div`
  h2 {
    color: var(--text-color);
  }

  h5 {
    font-size: 13px;
    color: var(--footer-txt);
  }

  p {
    width: max-content;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--footer-txt);
    cursor: pointer;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 400;
    transition: all 2s ease-in-out;

    &:hover {
      color: var(--main-color);
    }
  }

  @media screen and (max-width: 885px){
    p{
        &:hover{
            color: var(--main-color);
        }
    }
 }
`;

export const CopyWrapper = styled.div`
  padding: 10px 0;
  p {
    text-align: center;
    font-size: 18px;
    color: var(--next-color);
  }
`;
