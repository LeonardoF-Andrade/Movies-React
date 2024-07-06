import styled from 'styled-components';

export const Container = styled.textarea`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;
  outline: none;

  width: 100%;
  height: 274px;

  border-radius: 8px;
  padding: 16px;

  margin-bottom: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
