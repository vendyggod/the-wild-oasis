import { Button, Modal } from '../../../shared/ui';
import CreateCabinForm from '../ui/CreateCabinForm';

function AddCabin() {
  return (
    <Modal>
      <Modal.Open>
        <Button>Add new cabin</Button>
      </Modal.Open>

      <Modal.Window>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
