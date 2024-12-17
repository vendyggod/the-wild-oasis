import { createEditCabin } from '../../services/apis/cabins/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin was successfully updated');

      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },

    onError: (error) => toast.error(error.message),
  });

  return {
    editCabin,
    isEditing,
  };
}

export default useEditCabin;
