import ParkingListItem from './ParkingListItem';

const ParkingList = ({ parkings }) => {
  return (
    <ul>
      {parkings.map((parking, index) => (
        <ParkingListItem
          key={parking.recordid}
          parking={parking}
          rowIndex={index}
        />
      ))}
    </ul>
  );
};

export default ParkingList;
