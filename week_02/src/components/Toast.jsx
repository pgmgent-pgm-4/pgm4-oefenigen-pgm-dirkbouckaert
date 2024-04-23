import styled from '@emotion/styled';

const ToastContainer = styled.div((props) => ({
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

const Toast = (props) => {
  const { children } = props;
  return <ToastContainer {...props}>{children}</ToastContainer>;
};

export default Toast;
