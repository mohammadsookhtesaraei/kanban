import type { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';

import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import Modal from '@/components/modal/Modal';

import styles from './CreateListItemModal.module.css';

type CreateListItemModalProps = Omit<
  ComponentProps<typeof Modal>,
  'children' | 'heading'
>;

const CreateListItemModal = ({
  ref,
  contentClassName,
  ...otherProps
}: CreateListItemModalProps): ReactNode => {
  return (
    <Modal
      ref={ref}
      heading="Create new Item"
      contentClassName={clsx(
        styles['create-list-item-modal'],
        contentClassName
      )}
      {...otherProps}
    >
      <form>
        <TextInput label="Title" />
        <div className={styles.actions}>
          <Button type="button">Cancel</Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateListItemModal;
