import useCabins from '../../../model/cabins/useCabins';
import { Spinner } from '../../../shared/ui';
import CabinList from '../CabinList/CabinList';
import { Table, TableHeader } from './CabinTable.styles';

function CabinTable() {
  const { cabins, isLoading, error } = useCabins();

  if (isLoading) return <Spinner />;
  if (error) throw new Error('There is an error loading cabins... Try again.');

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>

      <CabinList cabins={cabins} />
    </Table>
  );
}

export default CabinTable;
