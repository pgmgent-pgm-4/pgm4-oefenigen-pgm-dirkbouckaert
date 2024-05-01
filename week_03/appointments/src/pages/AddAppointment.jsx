import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useServer from '../hooks/useServer';
import { API_URL, emptyFormData } from '../lib/consts';

// Components
import AppointmentForm from '../components/AppointmentForm';

const AddAppointment = () => {
  const navigate = useNavigate();
  const { createRecord } = useServer();
  const [formData, setFormData] = useState(emptyFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newApt = {
      id: Date.now(),
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptDate: formData.aptDate + ' ' + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    await createRecord(`${API_URL}/appointments`, newApt);
    setFormData(emptyFormData);
    navigate('/');
  };

  return (
    <main className="h-screen bg-zinc-50 p-8">
      <div className="mx-auto h-fit w-[calc(100%-2rem)] max-w-xl">
        <h1 className="mb-4 text-3xl font-bold">Add Appointment</h1>

        <AppointmentForm
          action="create"
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default AddAppointment;
