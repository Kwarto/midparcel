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
`;

export const LeftKnow = styled.div`
  width: 45%;
  img {
    width: 100%;
    transform: translateX(3rem);
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
`;
