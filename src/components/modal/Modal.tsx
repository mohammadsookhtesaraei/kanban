import type { MouseEvent, ReactNode, RefObject } from 'react';
import { type ComponentProps } from 'react';

import clsx from 'clsx';

import MingcuteCloseLine from '@/icons/MingcuteCloseLine';

import IconButton from '../IconButton/IconButton';

import styles from './Modal.module.css';

type Props = ComponentProps<'dialog'> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
};
const Modal = ({
  ref,
  className,
  children,
  heading,
  onClick,
  ...otherProps
}: Props): ReactNode => {
  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.currentTarget === e.target) {
      ref.current?.close();
    }

    onClick?.(e);
  };
  const handleCloseButtonClick = (): void => {
    ref.current?.close();
  };

  return (
    <dialog
      ref={ref}
      onClick={handleDialogClick}
      className={clsx(styles.modal, className)}
      {...otherProps}
    >
      <header>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.actions}>
          <IconButton onClick={handleCloseButtonClick}>
            <MingcuteCloseLine />
          </IconButton>
        </div>
      </header>
      <main>{children}</main>
    </dialog>
  );
};

export default Modal;
