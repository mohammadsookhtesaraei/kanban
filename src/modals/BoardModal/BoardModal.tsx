import { type ComponentProps, type ReactNode, use } from 'react';

import { useNavigate } from 'react-router';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import type z from 'zod';

import ColorInput from '@/components/ColorInput/ColorInput';
import TextArea from '@/components/TextArea/TextArea';
import TextInput from '@/components/TextInput/TextInput';

import { BoardsContext } from '@/context/board-context';

import FormModal from '@/modals/FormModal/FormModal';

import { BoardSchema } from '@/schemas/board-schema';

type Values = z.infer<typeof BoardSchema>;
type Props = Pick<ComponentProps<typeof FormModal>, 'modalRef'> & {
  boardId?: string;
  defaultValues?: Values;
};

const BoardModal = ({ modalRef, boardId, defaultValues }: Props): ReactNode => {
  const { dispatchBoards } = use(BoardsContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, resolver: zodResolver(BoardSchema) });

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

  // handle submit form
  const handleFormSubmit = (values: Values): void => {
    if (boardId !== undefined) {
      // create from useListsContexthook
      dispatchBoards({ type: 'board_edited', boardId, board: values });

      // toast
      toast.success('Board Edited successfully');
    } else {
      const id = globalThis.crypto.randomUUID();
      dispatchBoards({
        type: 'board_created',
        board: { id, lists: [], ...values },
      });

      // toast
      toast.success(' List created successfully');
    }

    // and close modal after form submit
    modalRef.current?.close();
  };

  return (
    <FormModal
      onClose={() => reset()}
      modalRef={modalRef}
      heading={
        boardId !== undefined ? 'Edit Existing List' : 'Create a new Board'
      }

      onSubmit={(event) => {
        void handleSubmit(handleFormSubmit)(event);
      }}
      onRemove={boardId !== undefined && handleRemoveButtonClick}
    >
      <TextInput
        {...register('title')}
        label="Title"

        error={errors.title?.message}
      />
      <TextArea
        {...register('description')}
        label="Description"
        error={errors.description?.message}
      />

      <Controller
        name="color"
        control={control}
        render={({ field }) => (
          <ColorInput {...field} label="Color" error={errors.color?.message} />
        )}
      />
    </FormModal>
  );
};

export default BoardModal;
