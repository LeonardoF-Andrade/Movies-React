import styled from 'styled-components';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;
    padding: 16px;
    background: transparent;

    border: 0;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
