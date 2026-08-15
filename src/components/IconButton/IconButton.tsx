import type { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Icon.module.css';

type Props = ComponentProps<'button'>;

const IconButton = ({
  className,
  children,
  ...otherProps
}: Props): ReactNode => {
  return (
    <button className={clsx(styles['icon-button'], className)} {...otherProps}>
      {children}
    </button>
  );
};
export default IconButton;
