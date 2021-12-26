import styled from 'styled-components';

export const ArticlesListContainer = styled.main`
  background: ${({ theme }) => theme.color.gray};
  display: grid;
  grid-gap: 20px;
  padding: 20px;
  padding-top: ${({ theme }) => theme.spacing.headerHeight};
`;
