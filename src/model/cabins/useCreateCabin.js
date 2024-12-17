import { createEditCabin } from '../../services/apis/cabins/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin was successfully created');

      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },

    onError: (error) => toast.error(error.message),
  });

  return {
    createCabin,
    isCreating,
  };
}

export default useCreateCabin;
