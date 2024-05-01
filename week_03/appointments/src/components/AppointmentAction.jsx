import { cn } from '../lib/utils';

const AppointmentAction = ({ Icon, className, title, action, id }) => {
  return (
    <div>
      <Icon
        title={title}
        className={cn('h-8 w-8 cursor-pointer', className)}
        onClick={() => action(id)}
      />
    </div>
  );
};

export default AppointmentAction;
