import Toast from '../components/Toast';

const ToastPage = () => {
  return (
    <div className="my-container">
      <h1>Toasts</h1>

      <Toast>Default</Toast>
      <Toast success>Success</Toast>
    </div>
  );
};

export default ToastPage;
