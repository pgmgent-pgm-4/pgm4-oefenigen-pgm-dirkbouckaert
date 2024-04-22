const Dimmer = ({ dimPercentage, setDimPercentage }) => {
  const handleChangeRange = (e) => {
    setDimPercentage(e.target.value);
  };

  return (
    <>
      <label htmlFor="dimmer" className="mt-4 block">
        Dim the light
      </label>
      <input
        type="range"
        name="dimmer"
        id="dimmer"
        min="0"
        max="100"
        step={1}
        value={dimPercentage}
        onChange={handleChangeRange}
      />
    </>
  );
};
export default Dimmer;
