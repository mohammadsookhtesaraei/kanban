import { type ComponentProps, type ReactNode, use, useState } from 'react';

import { useNavigate } from 'react-router';

import { toast } from 'react-toastify';

import Button from '@/components/Button/Button';
import ColorInput from '@/components/ColorInput/ColorInput';
import TextArea from '@/components/TextArea/TextArea';
import TextInput from '@/components/TextInput/TextInput';

import { BoardsContext } from '@/context/board-context';

import FormModal from '@/modals/FormModal/FormModal';

import type { BoardColor, BoardType } from '@/types/board';

type Values = Omit<BoardType, 'id' | 'lists'>;
type Props = Pick<ComponentProps<typeof FormModal>, 'modalRef'> & {
  boardId?: string;
  defaultValues?: Partial<Values>;
};

const BoardModal = ({ modalRef, boardId, defaultValues }: Props): ReactNode => {
  const { dispatchBoards } = use(BoardsContext);

  // input validation pass as a props to textInput
  const [titleError, setTitleError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleRemoveButtonClick = (): void => {
    if (boardId === undefined) {
      return;
    }
    dispatchBoards({ type: 'board_removed', boardId });
    toast.success('board removed successfully');
    modalRef.current?.close();
    navigate('/');
  };

  const handleFormReset = (): void => {
    setTitleError('');
  };

  // handle submit form
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const valuse: Values = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      color: formData.get('color') as BoardColor,
    };

    if (!validateTitle(valuse.title)) {
      return;
    }

    if (boardId !== undefined) {
      // create from useListsContexthook
      dispatchBoards({ type: 'board_edited', boardId, board: valuse });

      // toast
      toast.success('Board Edited successfully');
    } else {
      const id = globalThis.crypto.randomUUID();
      dispatchBoards({
        type: 'board_created',
        board: { id, lists: [], ...valuse },
      });

      // toast
      toast.success(' List created successfully');
    }

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
      heading={
        boardId !== undefined ? 'Edit Existing List' : 'Create a new Board'
      }
      onReset={handleFormReset}
      onSubmit={handleFormSubmit}
      extraActions={
        boardId !== undefined && (
          <Button
            type="button"
            variant="text"
            color="danger"
            onClick={handleRemoveButtonClick}
          >
            Remove
          </Button>
        )
      }
    >
      <TextInput
        label="Title"
        name="title"
        error={titleError}
        defaultValue={defaultValues?.title}
      />
      <TextArea
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
      />
      <ColorInput
        label="Color"
        name="color"
        defaultValue={defaultValues?.color}
      />
    </FormModal>
  );
};

export default BoardModal;
