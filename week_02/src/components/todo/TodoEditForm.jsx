import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { FaSave } from 'react-icons/fa';

const TodoEditForm = ({
  isEditing,
  setIsEditing,
  editedTodo,
  setEditedTodo,
  handleEditTodo,
}) => {
  const handleCloseModal = () => {
    setIsEditing(false);
    setEditedTodo({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditTodo();
  };

  return (
    <Modal
      open={isEditing}
      onClose={handleCloseModal}
      center
      classNames={{
        modal: 'min-h-[125px] w-full w-[calc(100vw-2rem)] !max-w-[500px]',
      }}
    >
      <form className="mt-8 flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="editedTodo"
          id="editedTodo"
          defaultValue={editedTodo.text}
          onChange={(e) =>
            setEditedTodo((todo) => ({ ...todo, text: e.target.value }))
          }
          placeholder="Edit your Todo"
          className="w-full rounded-lg border border-lime-600 px-4 py-2"
        />
        <button type="submit">
          <FaSave className="text-4xl text-lime-600" />
        </button>
      </form>
    </Modal>
  );
};

export default TodoEditForm;
