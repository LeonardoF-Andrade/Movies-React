import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 240px;

  border: none;
  background: rgba(
    255,
    133,
    155,
    0.05
  ); /* Usar RGBA para definir a opacidade do fundo */
  border-radius: 8px;
  border-radius: 8px;
  padding: 32px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;

  > h1 {
    margin-bottom: 8px;
  }

  .star {
    display: flex;
    gap: 4px;
    margin-bottom: 8px;
    > svg {
      margin-bottom: 12px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Text = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Número de linhas a serem exibidas antes do truncamento */
  -webkit-box-orient: vertical;
  
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 28px;
`;
