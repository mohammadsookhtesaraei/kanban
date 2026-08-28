import type { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';
import { toast } from 'react-toastify';

import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import Modal from '@/components/modal/Modal';

import { useBoardContext } from '@/hooks/useBoardContext';

import styles from './CreateListItemModal.module.css';

type CreateListItemModalProps = Omit<
  ComponentProps<typeof Modal>,
  'children' | 'heading'
> & {
  listId: string;
};

const CreateListItemModal = ({
  listId,
  ref,
  contentClassName,
  ...otherProps
}: CreateListItemModalProps): ReactNode => {
  const { create } = useBoardContext();

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = globalThis.crypto.randomUUID();
    const title = formData.get('title') as string;

    create(listId, { id, title });
    toast.success('Item created successfully');

    e.currentTarget.reset();
    ref.current?.close();
  };

  const handleCancelButtonClick = (): void => {
    ref.current?.close();
  };

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
      <form onSubmit={handleFormSubmit}>
        <TextInput label="Title" name="title" />
        <div className={styles.actions}>
          <Button type="reset" onClick={handleCancelButtonClick}>
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateListItemModal;
