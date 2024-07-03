import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  padding: 24px 123px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};

  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 64px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 350px;

  margin-left: 32px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: end;

    line-height: 24px;
    margin-right: 10px;

    > span {
      font-size: 16px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > button {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
