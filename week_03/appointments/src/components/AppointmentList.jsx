import AppointmentListItem from './AppointmentListItem';

const AppointmentList = ({ appointments, handleDelete, startEdit }) => {
  return (
    <ul>
      {appointments.map((appointment) => (
        <AppointmentListItem
          key={appointment.id}
          apt={appointment}
          handleDelete={handleDelete}
          startEdit={startEdit}
        />
      ))}
    </ul>
  );
};

export default AppointmentList;
