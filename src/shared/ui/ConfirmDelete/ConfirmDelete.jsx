import { Button, Heading } from '../';
import { StyledConfirmDelete } from './ConfirmDelete.styles';

function ConfirmDelete({ resourceName, onConfirm, disabled }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button variation="secondary" disabled={disabled}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
