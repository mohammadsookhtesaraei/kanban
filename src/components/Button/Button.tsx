import type { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';

type Props = ComponentProps<'button'> & {
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'default';
};

const Button = ({
  className,
  variant = 'solid',
  color = 'default',
  children,
  ...otherProps
}: Props): ReactNode => {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[color], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
