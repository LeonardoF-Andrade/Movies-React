import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 5px 16px;
  border-radius: 10px;
  font-size: 14px;
  margin-right: 5px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
