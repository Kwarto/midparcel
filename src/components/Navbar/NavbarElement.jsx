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
`;
export const NavItems = styled.div`
 display: flex;
 gap: 2.5rem;

 p{
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 600;
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

 p{
    color: var(--text-color);
    font-size: 1.2rem;
 }

 &:hover{
    background: var(--text-color);
    /* border: none; */
    p{
        color: var(--next-color);
    }
 }
`;
