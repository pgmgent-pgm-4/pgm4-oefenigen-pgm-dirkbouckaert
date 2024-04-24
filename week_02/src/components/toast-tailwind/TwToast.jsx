import { cn } from '../../lib/utils';

// Icons
import { FaCheckCircle } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaExclamationCircle } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

const TwToast = (props) => {
  const { children } = props;
  let title = props.title;
  if (!title) {
    if (props.success) title = 'Success';
    if (props.warning) title = 'Warning';
    if (props.error) title = 'Error';
    if (props.info) title = 'Info';
  }

  return (
    <article
      className={cn(
        'my-4 flex items-start gap-4 rounded border-l-8 border-gray-600 bg-gray-200 p-4 shadow',
        props.success &&
          'border-l-8 border-green-600 bg-green-200 text-green-600',
        props.warning &&
          'border-l-8 border-amber-600 bg-amber-200 text-amber-600',
        props.error && 'border-l-8 border-red-600 bg-red-200 text-red-600',
        props.info && 'border-l-8 border-blue-600 bg-blue-200 text-blue-600',
        props.outlined &&
          'border border-l-8 border-gray-300 border-l-gray-600 bg-white',
        props.outlined &&
          props.success &&
          'border border-l-8 border-green-300 border-l-green-600 bg-white',
        props.outlined &&
          props.warning &&
          'border border-l-8 border-amber-300 border-l-amber-600 bg-white',
        props.outlined &&
          props.error &&
          'border border-l-8 border-red-300 border-l-red-600 bg-white',
        props.outlined &&
          props.info &&
          'border border-l-8 border-blue-300 border-l-blue-600 bg-white'
      )}
      role="alert"
    >
      {props.icon && props.success && (
        <FaCheckCircle size={32} className="mt-2 text-green-600" />
      )}
      {props.icon && props.warning && (
        <FaExclamationTriangle size={32} className="mt-2 text-amber-600" />
      )}
      {props.icon && props.error && (
        <FaExclamationCircle size={32} className="mt-2 text-red-600" />
      )}
      {props.icon && props.info && (
        <FaInfoCircle size={32} className="mt-2 text-blue-600" />
      )}

      <div className="flex flex-col text-inherit">
        {props.success && <h5 className="mb-0">{title}</h5>}
        {props.warning && <h5 className="mb-0">{title}</h5>}
        {props.error && <h5 className="mb-0">{title}</h5>}
        {props.info && <h5 className="mb-0">{title}</h5>}
        {children}
      </div>
    </article>
  );
};

export default TwToast;
