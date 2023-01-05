import styled from 'styled-components';

export const NavContainer = styled.div`
  background: var(--next-color);
  min-height: 10vh;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0; right: 0;
  z-index: 100;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.253);

  @media screen and (max-width: 885px){
    background: var(--main-color);
  }

  @media screen and (max-width: 430px) {
   background: var(--text-color);
   min-height: 7vh;
   box-shadow: none;
  }
`;

export const NavLogo = styled.div`
 padding-left: 30px;
 display: flex;
 align-items: center;
 h1{
    color: var(--text-color);
    position: relative;
 }
 span{
   position: absolute;
   left: 10px;
   top: 10px;
   mix-blend-mode: screen;
 }
 @media screen and (max-width: 430px){
   /* background: var(--next-color); */
   display: flex;
   justify-content: center;
   width: 7rem;

   h1{
      color: var(--next-color);
      position: relative;
   }
   span{
      position: absolute;
   }
 }
`;
export const NavItems = styled.div`
 display: flex;
 gap: 2.5rem;

 p{
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 600;
 }

 @media screen and (max-width: 430px) {
   background: linear-gradient( -155deg, var(--main-color), var(--next-color));
   display: none;
   position: absolute;
   left: 0;
   right: 0;
   top: 3.6rem;
   box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.253);
   
   p{
      color: var(--next-color);
      padding: 20px 10px;
      margin: 8px 5px;
      background: var(--text-color);
      animation: flipNavItem 2s forwards ease;
      transform-origin: left center;
   }
   p:nth-child(2) {
        animation-delay: 200ms;
    }

   p:nth-child(3) {
        animation-delay: 500ms;
    }

   p:nth-child(4) {
        animation-delay: 800ms;
    }

   p:nth-child(5) {
        animation-delay: 900ms;
    }

    @keyframes flipNavItem {
        0%{
          transform: rotateX(90deg);
        }
        100%{
          transform:  rotateX(0deg);
          opacity: 1;
        }
    }
  }
`;
export const NavBtn = styled.div`
 padding: 8px 30px;
 border: 1px solid var(--text-color);
 box-shadow: 0 .5rem 1rem rgba(255, 255, 255, 0.253);
 cursor: pointer;
 text-align: center;
 margin-right: 20px;
 border-radius: 50px;
 transition: all 2s ease-in-out;
 background: var(--text-color);

 p{
   color: var(--next-color);
    font-size: 1.2rem;
 }

 &:hover{
   border: 1px solid var(--text-color);
   background: transparent;
    p{
        color: var(--text-color);
    }
 }

 @media screen and (max-width: 430px) {
   display: none;
 }
`;


export const MenuBar = styled.div`
 display: flex;
 flex-direction: column;
 margin-right: 5px;
 cursor: pointer;
 display: none;

 @media screen and (max-width: 430px) {
   display: flex;
 }
`

export const Burger = styled.button`
 width: 28px;
 height: 2px;
 margin: 2px;
 background: var(--next-color);
`