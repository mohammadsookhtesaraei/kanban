import { type ComponentProps, type ReactNode, useRef, useState } from 'react';

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
  // input validation pass as a props to textInput
  const [titleError, setTitleError] = useState<string | null>(null);

  // context for get data from form and add to list
  const { create } = useBoardContext();

  // use Ref for reset form
  const formref = useRef<HTMLFormElement | null>(null);

  // handle submit form
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = globalThis.crypto.randomUUID();
    const title = formData.get('title') as string;

    // validation fn
    if (!validateTitle(title)) {
      return;
    }

    // create from useBoardContexthook
    create(listId, { id, title: title.trim() });

    // toast
    toast.success('Item created successfully');

    // reset value form after submit
    e.currentTarget.reset();
    // and close modal after form submit
    ref.current?.close();
  };

  // onClose modal pass as a props
  const handleModalClose = (): void => {
    setTitleError(null);
    formref.current?.reset();
  };

  // cancel button
  const handleCancelButtonClick = (): void => {
    setTitleError(null);
    ref.current?.close();
  };

  // validate form fn
  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== 'string') {
      setTitleError('Title must be a string.');
      return false;
    }

    if (title.trim().length === 0) {
      setTitleError('Title cannot be empty.');
      return false;
    }

    setTitleError(null);
    return true;
  };

  return (
    <Modal
      onClose={handleModalClose}
      ref={ref}
      heading="Create new Item"
      contentClassName={clsx(
        styles['create-list-item-modal'],
        contentClassName
      )}
      {...otherProps}
    >
      <form ref={formref} onSubmit={handleFormSubmit}>
        <TextInput label="Title" name="title" error={titleError} />
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
