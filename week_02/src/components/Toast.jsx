import styled from '@emotion/styled';

// Icons
import { FaCheckCircle } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaExclamationCircle } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

// const ToastContainer = styled.div((props) => ({
//   marginBlock: '1rem',
//   padding: '1rem',
//   borderRadius: '0.25rem',
//   backgroundColor: props.success
//     ? 'green'
//     : props.warning
//       ? 'yellow'
//       : props.error
//         ? 'red'
//         : props.info
//           ? 'blue'
//           : '#ccc',
// }));

const ToastContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-block: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.success
      ? 'hsl(120, 50%, 75%)'
      : props.warning
        ? 'hsl(40, 70%, 75%)'
        : props.error
          ? 'hsl(0, 50%, 75%)'
          : props.info
            ? 'hsl(210, 75%, 75%)'
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

const TitleSuccess = styled.span`
  color: hsl(120, 50%, 40%);
`;

const TitleWarning = styled.span`
  color: hsl(40, 70%, 50%);
`;

const TitleError = styled.span`
  color: hsl(0, 50%, 50%);
`;

const TitleInfo = styled.span`
  color: hsl(210, 75%, 40%);
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
          <TitleSuccess>Success</TitleSuccess>
        ) : props.warning ? (
          <TitleWarning>Warning</TitleWarning>
        ) : props.error ? (
          <TitleError>Error</TitleError>
        ) : props.info ? (
          <TitleInfo>Info</TitleInfo>
        ) : (
          ''
        )}
        {children}
      </ToastInfo>
    </ToastContainer>
  );
};

export default Toast;
