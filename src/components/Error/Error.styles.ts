import styled from 'styled-components';

export const Container = styled.div`
  background: #00000052;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.red};
  font-weight: 900;
  cursor: pointer;
  transition: 0.2s all;

  :hover {
    transform: scale(1.2);
  }
`;

export const Window = styled.div`
  position: fixed;
  top: 40%;
  left: 25%;
  right: 25%;
  z-index: 3;
  border: solid 2px ${({ theme }) => theme.color.red};
  border-radius: 25px;
  background: ${({ theme }) => theme.color.white};
  padding: 24px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.color.red};
`;
