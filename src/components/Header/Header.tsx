import { ReactNode, FC } from 'react';
import { HeaderContainer } from './Header.styles';

type Props = {
  children: ReactNode;
};

export const Header: FC<Props> = ({ children }) => (
  <HeaderContainer>{children}</HeaderContainer>
);
