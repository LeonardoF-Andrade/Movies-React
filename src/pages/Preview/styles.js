import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    padding: 0 123px;
    margin-top: 40px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 40px;

    .title {
      margin-top: -16px;
      display: flex;
      gap: 10px;
      align-items: center;
      h1 {
        font-size: 36px;
      }
      > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
      :nth-child(2) {
        margin-left: 10px;
      }
    }

    .info {
      display: flex;
      align-items: center;
      margin-top: -16px;
      img {
        border-radius: 50%;
        height: 16px;
        width: 16px;
        margin-right: 8px;
      }
    }

    > p {
      text-align: justify;
      font-size: 16px;
    }
  }
`;
