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
`

export const LeftHistory = styled.div`
 width: 45%;
 img{
    width: 100%;
    transform: translateX(-4rem);
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
`
