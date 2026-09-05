import { type ComponentProps, type ReactNode, useState } from 'react';

import { toast } from 'react-toastify';

import TextInput from '@/components/TextInput/TextInput';

import { useBoardContext } from '@/hooks/useBoardContext';

import FormModal from '@/modals/FormModal/FormModal';

import type { ListItemType } from '@/types/list-item';

type Values = Omit<ListItemType, 'id'>;
type Props = Pick<ComponentProps<typeof FormModal>, 'modalRef'> & {
  listIndex: number;
};

const ListItemModal = ({ modalRef, listIndex }: Props): ReactNode => {
  const { dispatchLists } = useBoardContext();

  // input validation pass as a props to textInput
  const [titleError, setTitleError] = useState<string | null>(null);

  const handleFormReset = (): void => {
    setTitleError('');
  };

  // handle submit form
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const id = globalThis.crypto.randomUUID();

    const formData = new FormData(e.currentTarget);
    const valuse: Values = {
      title: formData.get('title') as string,
    };

    if (!validateTitle(valuse.title)) {
      return;
    }

    // create from useBoardContexthook
    dispatchLists({ type: 'item_created', listIndex, item: { id, ...valuse } });

    // toast
    toast.success('Item created successfully');

    // and close modal after form submit
    modalRef.current?.close();
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
    <FormModal
      modalRef={modalRef}
      heading="Create new Item"
      onReset={handleFormReset}
      onSubmit={handleFormSubmit}
    >
      <TextInput label="Title" name="title" error={titleError} />
    </FormModal>
  );
};

export default ListItemModal;
