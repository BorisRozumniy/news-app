import { FC, useRef } from 'react';
import { useTapOutside } from '../../useTapOutside';
import { Container, Close, Window } from './Error.styles';

type Props = {
  message: string;
  onClose: () => void;
};

export const Error: FC<Props> = ({ message, onClose }) => {
  const wrapperRef = useRef(null);
  useTapOutside(wrapperRef, onClose);
  return (
    <Container ref={wrapperRef}>
      <Window data-window-error>
        <Close onClick={onClose}>X</Close>
        {message}
      </Window>
    </Container>
  );
};
