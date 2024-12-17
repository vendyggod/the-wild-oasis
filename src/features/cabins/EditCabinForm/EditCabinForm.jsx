import { useForm } from 'react-hook-form';
import useEditCabin from '../../../model/cabins/useEditCabin';
import {
  Input,
  Form,
  Button,
  FileInput,
  TextArea,
  FormRow,
} from '../../../shared/ui';

function EditCabinForm({ cabinToEdit, onShowForm }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const { register, handleSubmit, getValues, reset, formState } = useForm({
    defaultValues: editValues,
  });
  const { errors } = formState;
  const { editCabin, isEditing } = useEditCabin();

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    editCabin(
      { newCabinData: { ...data, image }, id: editId },
      {
        onSuccess: () => {
          onShowForm(false);
          reset();
        },
      }
    );
  }

  return (
    <Form type="formEditCabin" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isEditing}
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.max_capacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isEditing}
          {...register('max_capacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be equal at least to 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regular_price?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isEditing}
          {...register('regular_price', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be equal at least to 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isEditing}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              parseFloat(value) <= parseFloat(getValues().regular_price) ||
              'Discount should be less than or equal to the regular price',
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <TextArea
          type="number"
          id="description"
          defaultValue=""
          disabled={isEditing}
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" {...register('image')} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Clear
        </Button>
        <Button disabled={isEditing}>Save changes</Button>
      </FormRow>
    </Form>
  );
}

export default EditCabinForm;
