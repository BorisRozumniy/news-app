import React from 'react';
import { ArticlesListContainer } from './ArticlesList.styles';

type Props = {
  prop?: (val: any) => void;
  children: React.ReactNode;
};

export const ArticlesList: React.FC<Props> = ({ children }) => (
  <ArticlesListContainer>{children}</ArticlesListContainer>
);
