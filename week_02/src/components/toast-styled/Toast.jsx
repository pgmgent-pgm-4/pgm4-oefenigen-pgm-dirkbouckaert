import styled from '@emotion/styled';

// Icons
import { FaCheckCircle } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaExclamationCircle } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

const ToastContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-block: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  color: ${(props) =>
    props.success
      ? 'hsl(120, 50%, 30%)'
      : props.warning
        ? 'hsl(45, 75%, 40%)'
        : props.error
          ? 'hsl(0, 50%, 50%)'
          : props.info
            ? 'hsl(210, 75%, 40%)'
            : 'hsl(0, 0%, 40%)'};
  background-color: ${(props) =>
    props.success
      ? 'hsl(120, 50%, 85%)'
      : props.warning
        ? 'hsl(40, 70%, 85%)'
        : props.error
          ? 'hsl(0, 50%, 85%)'
          : props.info
            ? 'hsl(210, 75%, 85%)'
            : 'hsl(0, 0%, 92%)'};
  border-left: 0.5rem solid;
  border-color: ${(props) =>
    props.success
      ? 'hsl(120, 50%, 40%)'
      : props.warning
        ? 'hsl(40, 70%, 50%)'
        : props.error
          ? 'hsl(0, 50%, 50%)'
          : props.info
            ? 'hsl(210, 75%, 40%)'
            : 'hsl(0, 0%, 40%)'};
  & > svg {
    margin-top: 0.5rem;
  }
`;

const ToastInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

const Toast = (props) => {
  const { children } = props;
  return (
    <ToastContainer {...props}>
      {props.success ? (
        <FaCheckCircle size={32} color="hsl(120, 50%, 40%)" />
      ) : props.warning ? (
        <FaExclamationTriangle size={32} color="hsl(40, 70%, 50%)" />
      ) : props.error ? (
        <FaExclamationCircle size={32} color="hsl(0, 50%, 50%)" />
      ) : props.info ? (
        <FaInfoCircle size={32} color="hsl(210, 75%, 40%)" />
      ) : (
        ''
      )}

      <ToastInfo>
        {props.success ? (
          <span>Success</span>
        ) : props.warning ? (
          <span>Warning</span>
        ) : props.error ? (
          <span>Error</span>
        ) : props.info ? (
          <span>Info</span>
        ) : (
          ''
        )}
        {children}
      </ToastInfo>
    </ToastContainer>
  );
};

export default Toast;
