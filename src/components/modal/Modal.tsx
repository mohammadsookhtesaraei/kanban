import type { ReactNode, RefObject } from 'react';
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
  ...otherProps
}: Props): ReactNode => {
  const handleCloseButtonClick = (): void => {
    ref.current?.close();
  };

  return (
    <dialog ref={ref} className={clsx(styles.modal, className)} {...otherProps}>
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
