import styled from 'styled-components';

export const Container = styled.a`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  font-weight: 500;
  font-size: 16px;

  display: flex;
  align-items: center;

  > svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
