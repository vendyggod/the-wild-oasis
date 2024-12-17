import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting as updateSettingApi } from '../../services/apis/settings/apiSettings';
import toast from 'react-hot-toast';

function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Settings were successfully updated');

      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
    },

    onError: (error) => toast.error(error.message),
  });

  return {
    updateSetting,
    isUpdating,
  };
}

export default useUpdateSetting;
