import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;

  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-weight: 500;

  border: none;
`;
