import { Input, Form, Button, FileInput, TextArea, FormRow } from '../../ui/';
import { useForm } from 'react-hook-form';
import { createCabin } from '../../services/apis/cabins/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin was successfully created');

      reset();

      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },

    onError: (error) => toast.error(error.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  // JUST FOR EDUCATION PURPOSES: Form onSubmit can receive a second callback function
  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.max_capacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
