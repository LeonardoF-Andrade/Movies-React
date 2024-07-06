import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Avatar = styled.div`
  position: relative;
  margin: -92px auto 64px;
  height: 186px;
  width: 186px;

  img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  label {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    height: 48px;
    width: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    position: absolute;
    right: 7px;
    bottom: 7px;

    input {
      display: none;
    }
    > svg {
      width: 20px;
      height: 20px;
      color: black;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 144px;
  background: rgba(255, 133, 155, 0.05);
  padding: 64px 144px;
`;

export const Update = styled.form`
  width: 340px;
  .password {
    margin: 24px auto;
  }
`;
