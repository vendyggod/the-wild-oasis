import CabinRow from '../CabinRow/CabinRow';

function CabinList({ cabins }) {
  return cabins.map((cabin) => <CabinRow cabin={cabin} key={cabin.id} />);
}

export default CabinList;
