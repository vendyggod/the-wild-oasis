import CabinTable from '../features/cabins/ui/CabinTable';
import { Heading, Row } from '../shared/ui';
import AddCabin from '../features/cabins/ui/AddCabin';

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
