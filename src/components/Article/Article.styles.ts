import styled from 'styled-components';

export const ArticleContainer = styled.a`
  background: #fff;
  border-radius: 25px;
  padding: 20px;
  text-decoration: none;
  color: black;
  box-shadow: -4px 3px 14px 1px #64738254;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 25px;
  grid-row: 1/4;
`;

export const Title = styled.h2`
  grid-column: 2/3;
  margin: 0;
`;

export const P = styled.p`
  grid-column: 2/3;
`;

export const Content = styled.section`
  margin-top: 20px;
  grid-column: 1/2;
  grid-row: 4/5;
`;
