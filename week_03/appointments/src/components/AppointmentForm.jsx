const AppointmentForm = ({
  action = 'create',
  formData,
  setFormData,
  handleSubmit,
  cancelEdit = null,
}) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="petName">Pet Name</label>
        <input
          type="text"
          name="petName"
          id="petName"
          placeholder="Pet Name"
          className="w-full rounded-lg border border-zinc-200 p-2 text-zinc-800
                   focus:border-amber-600 focus:ring-amber-600"
          value={formData.petName}
          onChange={(e) =>
            setFormData({ ...formData, petName: e.target.value })
          }
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="ownerName">Owner Name</label>
        <input
          type="text"
          name="ownerName"
          id="ownerName"
          placeholder="Owner Name"
          className="w-full rounded-lg border border-zinc-200 p-2 text-zinc-800
                   focus:border-amber-600 focus:ring-amber-600"
          value={formData.ownerName}
          onChange={(e) =>
            setFormData({ ...formData, ownerName: e.target.value })
          }
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="aptDate">Date</label>
        <input
          type="date"
          name="aptDate"
          id="aptDate"
          className="w-full rounded-lg border border-zinc-200 p-2 text-zinc-800
                   focus:border-amber-600 focus:ring-amber-600"
          value={formData.aptDate}
          onChange={(e) =>
            setFormData({ ...formData, aptDate: e.target.value })
          }
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="aptTime">Time</label>
        <input
          type="time"
          name="aptTime"
          id="aptTime"
          className="w-full rounded-lg border border-zinc-200 p-2 text-zinc-800
                   focus:border-amber-600 focus:ring-amber-600"
          value={formData.aptTime}
          onChange={(e) =>
            setFormData({ ...formData, aptTime: e.target.value })
          }
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="aptNotes">Notes</label>
        <textarea
          name="aptNotes"
          id="aptNotes"
          className="w-full rounded-lg border border-zinc-200 p-2 text-zinc-800
                   focus:border-amber-600 focus:ring-amber-600"
          value={formData.aptNotes}
          onChange={(e) =>
            setFormData({ ...formData, aptNotes: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-amber-700 p-2 text-zinc-50 transition hover:bg-amber-600"
      >
        {action === 'create' ? 'Add Appointment' : 'Update Appointment'}
      </button>
      {cancelEdit && (
        <button
          onClick={cancelEdit}
          className="w-full rounded-lg border border-zinc-400 p-2 hover:bg-zinc-100"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default AppointmentForm;
