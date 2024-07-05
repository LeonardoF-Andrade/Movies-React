import styled from 'styled-components';
import background from '../../../public/image.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  /* width: 640px; */
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
    font-weight: 700;
  }

  h2 {
    margin-bottom: 48px;
  }

  label {
    font-size: 16px;
    margin-bottom: 48px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    button {
      margin-top: 16px;
      margin-bottom: 42px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  opacity: 0.4;
`;
