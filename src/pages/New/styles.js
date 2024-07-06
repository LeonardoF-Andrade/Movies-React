import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  main {
    overflow-y: auto;
    padding: 40px 123px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: start;
    h1 {
      margin-top: -16px;
    }

    div {
      display: flex;
      width: 100%;
      gap: 40px;
      /* margin-bottom: 40px; */
    }
    .Excluir {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Section = styled.section`
  margin: 28px 0;
  width: 100%;
  > h2 {
    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.GREY_100};
    font-size: 20px;
    font-weight: 400;
  }
  .Note {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    border-radius: 8px;
    padding: 16px;
    /* flex-wrap: wrap; */
  }
`;
