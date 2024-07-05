import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 52px;
  > div {
    max-height: 800px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 123px;
    overflow-y: auto;
  }
`;

export const MyFilms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 740px;

  > h1 {
    font-size: 32px;
    font-weight: 400;
    white-space: nowrap;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
