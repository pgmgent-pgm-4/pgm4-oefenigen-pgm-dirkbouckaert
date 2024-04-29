import { cn } from '../../lib/utils';

const ParkingListItem = ({ parking, rowIndex }) => {
  return (
    <li
      className={cn(
        'flex items-center justify-between p-2',
        rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-100'
      )}
    >
      <h2 className="mb-0">{parking.fields.name}</h2>
      <p
        className={cn(
          'text-2xl',
          parking.fields.occupation >= parking.fields.totalcapacity / 2 &&
            'text-green-500',
          parking.fields.occupation <= parking.fields.totalcapacity / 3 &&
            'text-orange-500',
          parking.fields.occupation <= parking.fields.totalcapacity / 4 &&
            'text-red-500'
        )}
      >
        {parking.fields.occupation} / {parking.fields.totalcapacity}
      </p>
    </li>
  );
};

export default ParkingListItem;
