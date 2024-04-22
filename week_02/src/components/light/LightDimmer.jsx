import { useState } from 'react';
import Dimmer from './Dimmer';
import Light from './Light';

const LightDimmer = () => {
  const [dimPercentage, setDimPercentage] = useState(70);

  return (
    <>
      <Light dimPercentage={dimPercentage} />
      <Dimmer
        dimPercentage={dimPercentage}
        setDimPercentage={setDimPercentage}
      />
    </>
  );
};

export default LightDimmer;
