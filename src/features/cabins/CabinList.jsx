import CabinRow from './CabinRow';

function CabinList({ cabins }) {
  return cabins.map((cabin) => <CabinRow cabin={cabin} key={cabin.id} />);
}

export default CabinList;
