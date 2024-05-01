import {
  BiCalendarCheck,
  BiEdit,
  BiNotepad,
  BiSolidUser,
  BiTrash,
} from 'react-icons/bi';
import AppointmentDetail from './AppointmentDetail';
import AppointmentAction from './AppointmentAction';

const AppointmentListItem = ({ apt, handleDelete, startEdit }) => {
  return (
    <li className="my-4 space-y-4 rounded-lg border border-amber-500 p-4">
      <div className="flex items-center gap-2">
        <BiCalendarCheck className="h-6 w-6 text-amber-700" />
        <h3 className="mb-0 text-amber-700">{apt.petName}</h3>
        <span className="ml-auto text-amber-700">{apt.aptDate}</span>
      </div>

      <div className="flex justify-between">
        <div>
          <AppointmentDetail Icon={BiSolidUser} detail={apt.ownerName} />
          <AppointmentDetail Icon={BiNotepad} detail={apt.aptNotes} />
        </div>
        <div className="flex gap-4">
          <AppointmentAction
            Icon={BiEdit}
            action={startEdit}
            id={apt.id}
            className="text-orange-400 hover:text-orange-500"
            title="Edit Appointment"
          />
          <AppointmentAction
            Icon={BiTrash}
            action={handleDelete}
            id={apt.id}
            className="text-red-500 hover:text-red-600"
            title="Delete Appointment"
          />
        </div>
      </div>
    </li>
  );
};

export default AppointmentListItem;
