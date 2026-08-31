import {
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  useRef,
  useState,
} from 'react';

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
  // state input
  const [title, setTitle] = useState<string>('');

  // input validation pass as a props to textInput
  const [titleError, setTitleError] = useState<string | null>(null);

  // should validate
  const shouldValidateOnChange = useRef<boolean>(false);

  // context for get data from form and add to list
  const { dispatchLists } = useBoardContext();

  // use Ref for reset form
  const formref = useRef<HTMLFormElement | null>(null);

  const handleFormReset = (): void => {
    setTitle('');
    shouldValidateOnChange.current = false;
  };

  // handle submit form
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const id = globalThis.crypto.randomUUID();

    shouldValidateOnChange.current = true;
    // validation fn
    if (!validateTitle(title)) {
      return;
    }

    // create from useBoardContexthook
    dispatchLists({ type: 'created', listId, item: { id, title } });

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

  // title onchange

  const HandleTitleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();
    if (shouldValidateOnChange.current) {
      validateTitle(value);
    }
    setTitle(value);
  };

  // validate form fn
  const validateTitle = (title: string): boolean => {
    if (title.length === 0) {
      setTitleError('Title cannot be empty.');
      return false;
    }

    if (title.length < 5) {
      setTitleError('Title must be at least 5 characters.');
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
      <form ref={formref} onReset={handleFormReset} onSubmit={handleFormSubmit}>
        <TextInput
          label="Title"
          name="title"
          error={titleError}
          value={title}
          onChange={HandleTitleOnChange}
        />
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
