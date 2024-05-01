import { useEffect, useState } from 'react';
import useServer from '../hooks/useServer';
import { API_URL, emptyFormData } from '../lib/consts';
import { sortByDate } from '../lib/utils';

// Components
import AppointmentList from '../components/AppointmentList';
import Search from '../components/Search';
import AppointmentForm from '../components/AppointmentForm';

const AppointmentsPage = () => {
  const { isLoading, error, fetchData, updateRecord, deleteRecord } =
    useServer();

  const [appointments, setAppointments] = useState([]);
  const [filteredApts, setFilteredApts] = useState([]);
  const [search, setSearch] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(emptyFormData);

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = await fetchData(`${API_URL}/appointments`);
      setAppointments(sortByDate(data));
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = appointments.filter(
        (apt) =>
          apt.petName.toLowerCase().includes(search.toLowerCase()) ||
          apt.ownerName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApts(sortByDate(filtered));
    } else {
      setFilteredApts(sortByDate(appointments));
    }
  }, [appointments, search]);

  const handleDelete = async (id) => {
    await deleteRecord(`${API_URL}/appointments/${id}`, 'DELETE');
    setAppointments(appointments.filter((apt) => apt.id !== id));
    setFilteredApts(filteredApts.filter((apt) => apt.id !== id));
  };

  const startEdit = async (id) => {
    const apt = await fetchData(`${API_URL}/appointments/${id}`);
    setFormData({
      id: apt.id,
      petName: apt.petName,
      ownerName: apt.ownerName,
      aptDate: apt.aptDate.split(' ')[0],
      aptTime: apt.aptDate.split(' ')[1],
      aptNotes: apt.aptNotes,
    });
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setFormData(emptyFormData);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const aptUpdate = {
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptDate: formData.aptDate + ' ' + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    const updated = await updateRecord(
      `${API_URL}/appointments/${formData.id}`,
      aptUpdate
    );
    setIsEditing(false);
    setFormData(emptyFormData);
    // Update state
    const updatedApts = appointments.map((apt) =>
      apt.id === updated.id ? updated : apt
    );
    setAppointments(sortByDate(updatedApts));
    setFilteredApts(sortByDate(updatedApts));
  };

  return (
    <main className="h-screen bg-zinc-50 p-8">
      <div className="mx-auto h-fit w-[calc(100%-2rem)] max-w-xl">
        <Search search={search} setSearch={setSearch} />

        {error && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}

        {(appointments && appointments.length === 0) ||
          (filteredApts && filteredApts.length === 0 && (
            <p>No appointments found</p>
          ))}

        {filteredApts && filteredApts.length > 0 && (
          <AppointmentList
            appointments={filteredApts}
            handleDelete={handleDelete}
            startEdit={startEdit}
          />
        )}
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-8">
            <AppointmentForm
              action="edit"
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleEdit}
              cancelEdit={cancelEdit}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default AppointmentsPage;
