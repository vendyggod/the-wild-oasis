import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../../services/apis/cabins/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('Cabin was successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (error) => toast.error(`Something went wrong. ${error.message}`),
  });

  return { deleteCabin, isDeleting };
}

export default useDeleteCabin;
