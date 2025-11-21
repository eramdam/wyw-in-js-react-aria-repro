import { css } from '@linaria/core';
import type { ComponentProps, PropsWithChildren } from 'react';
import {Button as RACButton} from 'react-aria-components';

type ButtonProps = PropsWithChildren<ComponentProps<typeof RACButton>>;

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

// Crashes with `[plugin:wyw-in-js] 0 is not a constructor in node_modules/.vite/deps/react-aria-components.js`
// export function Button(props: PropsWithChildren<ButtonProps>) {
//   const {children, ...rest} = props;
//   return <RACButton {...rest} className={buttonStyles}>{children}</RACButton>
// }

// Works fine
export const Button = (props:PropsWithChildren<ButtonProps>) => {
   const {children, ...rest} = props;
  return <RACButton {...rest} className={buttonStyles}>{children}</RACButton>
}