import { useState } from 'react';
import { useCreateCabin, useDeleteCabin } from '../model';
import { formatCurrency } from '../../../shared/utils/helpers';
import { TableRow, Img, Cabin, Price, Discount } from './CabinRow.styles';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import EditCabinForm from './EditCabinForm';

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { deleteCabin, isDeleting } = useDeleteCabin();
  const { createCabin } = useCreateCabin();
  const {
    id: cabinId,
    name,
    max_capacity,
    regular_price,
    discount,
    description,
    image,
  } = cabin;

  function toggleShowForm() {
    setShowForm((show) => !show);
  }

  function handleDeleteCabin() {
    deleteCabin(cabinId);
  }

  function handleDuplicateCabin() {
    createCabin({
      name: `Copy of ${name}`,
      max_capacity,
      regular_price,
      discount,
      description,
      image,
    });
  }

  return (
    <>
      <TableRow>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {max_capacity} guests</div>
        <Price>{formatCurrency(regular_price)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={handleDuplicateCabin}>
            <HiSquare2Stack />
          </button>
          <button onClick={toggleShowForm}>
            <HiPencil />
          </button>
          <button onClick={handleDeleteCabin} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && (
        <EditCabinForm cabinToEdit={cabin} onShowForm={setShowForm} />
      )}
    </>
  );
}

export default CabinRow;
