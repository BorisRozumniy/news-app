import { ReactNode, FC } from 'react';
import { Btn } from './Button.styles';

type Props = {
  handler: (val: any) => void;
  children: ReactNode;
};

export const Button: FC<Props> = ({ handler, children }) => (
  <Btn onClick={handler}>{children}</Btn>
);
