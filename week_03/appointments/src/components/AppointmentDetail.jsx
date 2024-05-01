const AppointmentDetail = ({ Icon, detail }) => {
  return (
    <div className="flex items-center gap-2 text-zinc-800">
      <Icon className="h-4 w-4 text-amber-700" />
      <p>{detail}</p>
    </div>
  );
};

export default AppointmentDetail;
