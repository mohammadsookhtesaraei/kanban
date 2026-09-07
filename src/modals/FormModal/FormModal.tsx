import { type ComponentProps, type ReactNode, type RefObject } from 'react';

import Button from '@/components/Button/Button';

import Modal from '@/modals/Modal/Modal';

import styles from './FormModal.module.css';

type ModalProps = {
  modalRef: ComponentProps<typeof Modal>['ref'];
  heading: ComponentProps<typeof Modal>['heading'];
  onClose: ComponentProps<typeof Modal>['onClose'];
};

type FormProps = Omit<ComponentProps<'form'>, 'ref'> & {
  formRef?: RefObject<HTMLFormElement | null>;
  onRemove?: false | (() => void);
};

type Props = ModalProps & FormProps;

const FormModal = ({
  modalRef,

  heading,
  onRemove,
  children,
  onClose,
  ...otherProps
}: Props): ReactNode => {
  // cancel button
  const handleCancelButtonClick = (): void => {
    modalRef?.current?.close();
  };

  return (
    <Modal
      onClose={onClose}
      ref={modalRef}
      heading={heading}
      contentClassName={styles['form-modal']}
    >
      <form {...otherProps}>
        {children}
        <div className={styles.actions}>
          {onRemove && (
            <Button
              type="button"
              variant="text"
              color="danger"
              onClick={onRemove}
            >
              Remove
            </Button>
          )}
          <Button
            className={styles.cancel}
            type="reset"
            onClick={handleCancelButtonClick}
          >
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default FormModal;
