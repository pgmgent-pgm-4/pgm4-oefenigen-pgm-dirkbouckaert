import AddAppointment from '../pages/AddAppointment';
import AppointmentsPage from '../pages/AppointmentsPage';

export default [
  {
    addToNavbar: true,
    name: 'Appointments',
    path: '/',
    element: <AppointmentsPage />,
  },
  {
    addToNavbar: false,
    name: 'Add Appointment',
    path: '/add-appointment',
    element: <AddAppointment />,
  },
];
