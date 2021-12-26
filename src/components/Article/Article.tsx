import React from 'react';
import { news } from '../../types';
import { ArticleContainer, Content, Img, P, Title } from './Article.styles';

type Props = {
  news: news;
};

export const Article: React.FC<Props> = ({ news }) => (
  <ArticleContainer href={news.url}>
    <Img src={news.urlToImage} alt={news.title} />
    <Title>{news.title}</Title>
    <P>published {news.publishedAt}</P>
    <P as="h3">author: {news.author}</P>
    <P>{news.description}</P>
    <Content>{news.content}</Content>
  </ArticleContainer>
);
