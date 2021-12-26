import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.color.gray};
  padding: 10px 20px;
`;
