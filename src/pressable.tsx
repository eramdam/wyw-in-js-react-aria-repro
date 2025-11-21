import { css } from '@linaria/core';
import type { ComponentProps, PropsWithChildren } from 'react';
import {Button} from 'react-aria-components';

type ButtonProps = PropsWithChildren<ComponentProps<typeof Button>>;

const buttonStyles = css`
  background-color: rebeccapurple;
  color: white;
  border-color: transparent !important;

  &[data-hovered='true'] {
    background-color: purple;
  }

  &[data-pressed='true'] {
    background-color: magenta;
  }

  &[data-disabled='true'] {
    background-color: grey;
    opacity: 0.4;
  }
`;


export function Pressable(props: PropsWithChildren<ButtonProps>) {
  const {children, ...rest} = props;
  return <Button {...rest} className={buttonStyles}>{children}</Button>
}