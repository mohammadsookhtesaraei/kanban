import { type ComponentProps, type ReactNode } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import type z from 'zod';

import TextArea from '@/components/TextArea/TextArea';
import TextInput from '@/components/TextInput/TextInput';

import { useListsContext } from '@/hooks/useListsContext';

import FormModal from '@/modals/FormModal/FormModal';

import { ListItemSchema } from '@/schemas/list-item-schema';

type Values = z.infer<typeof ListItemSchema>;
type Props = Pick<ComponentProps<typeof FormModal>, 'modalRef'> & {
  listIndex: number;
  itemIndex?: number;
  defaultValues?: Values;
};

const ListItemModal = ({
  modalRef,
  listIndex,
  itemIndex,
  defaultValues,
}: Props): ReactNode => {
  const { dispatchLists } = useListsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, resolver: zodResolver(ListItemSchema) });

  const handleRemoveButtonClick = (): void => {
    if (itemIndex === undefined) {
      return;
    }
    dispatchLists({ type: 'item_removed', listIndex, itemIndex });
    toast.success('Item removed successfully');
    modalRef.current?.close();
  };

  // handle submit form
  const handleFormSubmit = (values: Values): void => {
    if (itemIndex !== undefined) {
      dispatchLists({
        type: 'item_edited',
        listIndex,
        itemIndex,
        item: values,
      });
    } else {
      const id = globalThis.crypto.randomUUID();
      // create from useListsContexthook
      dispatchLists({
        type: 'item_created',
        listIndex,
        item: { id, ...values },
      });
      // toast
      toast.success('Item created successfully');
    }

    // and close modal after form submit
    modalRef.current?.close();
  };

  return (
    <FormModal
      onClose={() => reset()}
      modalRef={modalRef}
      heading={
        itemIndex !== undefined ? 'Edit Exesting Item' : 'Create new Item'
      }
      // eslint-disable-next-line react-hooks/refs
      onSubmit={handleSubmit(handleFormSubmit)}
      onRemove={itemIndex !== undefined && handleRemoveButtonClick}
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
      <TextInput
        {...register('dueDate')}
        label="Due Date"
        error={errors.dueDate?.message}
        type="date"
      />
    </FormModal>
  );
};

export default ListItemModal;
