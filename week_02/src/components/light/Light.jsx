const Light = ({ dimPercentage }) => {
  return (
    <div
      className="h-48 w-48 rounded-full"
      style={{ backgroundColor: `hsla(46, 96%, 53%, ${dimPercentage / 100})` }}
    ></div>
  );
};

export default Light;
