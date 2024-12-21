import UpdateSettingsForm from '../features/settings/ui/UpdateSettingsForm';
import { Heading, Row } from '../shared/ui';

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
