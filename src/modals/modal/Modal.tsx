import type { PointerEvent, ReactNode, RefObject } from 'react';
import { type ComponentProps } from 'react';

import clsx from 'clsx';

import IconButton from '@/components/IconButton/IconButton';

import MingcuteCloseLine from '@/icons/MingcuteCloseLine';

import styles from './Modal.module.css';

type Props = ComponentProps<'dialog'> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
  contentClassName?: string;
};
const Modal = ({
  ref,
  className,
  children,
  heading,
  onPointerDown,
  contentClassName,
  ...otherProps
}: Props): ReactNode => {
  const handleDialogClick = (e: PointerEvent<HTMLDialogElement>): void => {
    if (e.currentTarget === e.target) {
      ref.current?.close();
    } else {
      onPointerDown?.(e);
    }
  };
  const handleCloseButtonClick = (): void => {
    ref.current?.close();
  };

  return (
    <dialog
      ref={ref}
      onPointerDown={handleDialogClick}
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
      <main className={contentClassName}>{children}</main>
    </dialog>
  );
};

export default Modal;
