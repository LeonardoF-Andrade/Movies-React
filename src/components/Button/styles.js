import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-weight: 500;
  border: none;
  font-size: 16px;

  svg {
    font-weight: 500;
    font-size: 16px;
  }
`;
