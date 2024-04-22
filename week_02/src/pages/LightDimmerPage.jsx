import LightDimmer from '../components/light/LightDimmer';

const LightDimmerPage = () => {
  return (
    <div className="my-container">
      <h1 className="text-center">Light Dimmer</h1>

      <div className="mt-4 flex flex-col items-center">
        <LightDimmer />
      </div>
    </div>
  );
};

export default LightDimmerPage;
