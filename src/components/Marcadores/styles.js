import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;

  background-color: ${({ theme, $isnew }) =>
    $isnew == 'false' ? theme.COLORS.BACKGROUND_700 : 'transparent'};

  border: ${({ theme, $isnew }) =>
    $isnew == 'true' ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  padding-right: 16px;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    background: transparent;
  }
`;
