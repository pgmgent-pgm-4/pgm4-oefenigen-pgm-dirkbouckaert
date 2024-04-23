import Toast from '../components/Toast';

const ToastPage = () => {
  return (
    <div className="my-container">
      <h1>Toasts</h1>

      <Toast>This is the default toast message</Toast>
      <Toast success>The list has been saved</Toast>
      <Toast warning>This is a warning message!</Toast>
      <Toast error>This is an error message!</Toast>
      <Toast info>This is an info message.</Toast>
    </div>
  );
};

export default ToastPage;
