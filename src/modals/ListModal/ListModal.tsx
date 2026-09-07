import { type ComponentProps, type ReactNode } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import type z from 'zod';

import TextInput from '@/components/TextInput/TextInput';

import { useListsContext } from '@/hooks/useListsContext';

import FormModal from '@/modals/FormModal/FormModal';

import { ListSchema } from '@/schemas/list-schema';

type Values = z.infer<typeof ListSchema>;
type Props = Pick<ComponentProps<typeof FormModal>, 'modalRef'> & {
  listIndex?: number;
  defaultValues?: Values;
};

const ListModal = ({
  modalRef,
  listIndex,
  defaultValues,
}: Props): ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, resolver: zodResolver(ListSchema) });
  const { dispatchLists } = useListsContext();

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }
    dispatchLists({ type: 'list_removed', listIndex });
    toast.success('List removed successfully');
    modalRef.current?.close();
  };

  // handle submit form
  const handleFormSubmit = (values: Values): void => {
    if (listIndex !== undefined) {
      // create from useListsContexthook
      dispatchLists({ type: 'list_edited', listIndex, list: values });

      // toast
      toast.success('List Edited successfully');
    } else {
      const id = globalThis.crypto.randomUUID();
      dispatchLists({
        type: 'list_created',
        list: { id, items: [], ...values },
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
        listIndex !== undefined ? 'Edit Existing List' : 'Create a new List'
      }
      // eslint-disable-next-line react-hooks/refs
      onSubmit={handleSubmit(handleFormSubmit)}

      onRemove={listIndex !== undefined && handleRemoveButtonClick}
    >
      <TextInput
        {...register('title')}
        label="Title"

        error={errors.title?.message}
      />
    </FormModal>
  );
};

export default ListModal;
