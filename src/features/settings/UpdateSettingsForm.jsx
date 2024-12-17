import useSettings from '../../model/settings/useSettings';
import useUpdateSetting from '../../model/settings/useUpdateSetting';
import { Form, FormRow, Input, Spinner } from '../../shared/ui';

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      min_booking_length,
      max_booking_length,
      max_guests_per_booking,
      breakfast_price,
    } = {},
  } = useSettings();

  const { updateSetting, isUpdating } = useUpdateSetting();

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={min_booking_length}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'min_booking_length')}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={max_booking_length}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'max_booking_length')}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={max_guests_per_booking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'max_guests_per_booking')}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfast_price}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'breakfast_price')}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
