import { useState } from 'react';
import CabinTable from '../features/cabins/CabinTable/CabinTable';
import { Button, Heading, Row } from '../shared/ui';
import CreateCabinForm from '../features/cabins/CreateCabinForm/CreateCabinForm';

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
