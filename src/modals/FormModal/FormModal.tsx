import {
  type ComponentProps,
  type ReactNode,
  type RefObject,
  useRef,
} from 'react';

import Button from '@/components/Button/Button';

import Modal from '@/modals/Modal/Modal';

import styles from './FormModal.module.css';

type ModalProps = {
  modalRef: ComponentProps<typeof Modal>['ref'];
  heading: ComponentProps<typeof Modal>['heading'];
};

type FormProps = Omit<ComponentProps<'form'>, 'ref'> & {
  formRef?: RefObject<HTMLFormElement | null>;
  onRemove?: false | (() => void);
};

type Props = ModalProps & FormProps;

const FormModal = ({
  modalRef,
  formRef,
  heading,
  onRemove,
  children,

  ...otherProps
}: Props): ReactNode => {
  const interlaFormRef = useRef<HTMLFormElement>(null);

  // onClose modal pass as a props
  const handleModalClose = (): void => {
    formRef?.current?.reset();
  };

  // cancel button
  const handleCancelButtonClick = (): void => {
    modalRef?.current?.close();
  };

  return (
    <Modal
      onClose={handleModalClose}
      ref={modalRef}
      heading={heading}
      contentClassName={styles['form-modal']}
    >
      <form
        {...otherProps}
        ref={(node) => {
          interlaFormRef.current = node;
          if (formRef) {
            formRef.current = node;
          }
        }}
      >
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
