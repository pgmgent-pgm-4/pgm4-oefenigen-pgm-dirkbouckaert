import styled from '@emotion/styled';

const ToastContainer = styled.div(({ props }) => ({
  marginBlock: '1rem',
  padding: '1rem',
  borderRadius: '0.25rem',
  backgroundColor: props.success
    ? 'green'
    : props.warning
      ? 'yellow'
      : props.error
        ? 'red'
        : props.info
          ? 'blue'
          : '#ccc',
}));

const Toast = ({ children }) => {
  return <ToastContainer>{children}</ToastContainer>;
};

export default Toast;
