import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: none;
  border-radius: 25px;
  background: ${({ theme }) => theme.color.primary};
  padding: 16px 8px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 16px;
  transition: 0.2s all;
  cursor: pointer;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadow}, 0 0 5px black;
  }
`;
