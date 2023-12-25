import React, { useState } from 'react';

function ToggleSwitch() {
  const [toggleSwitch, switchStatus] = useState(false);
  const [value, setValue] = useState('OFF');

  const handleClick = () => {
    const newSwitchStatus = !toggleSwitch;
    switchStatus(newSwitchStatus);
    const newValue = newSwitchStatus ? 'ON' : 'OFF';
    setValue(newValue);
    console.log(newSwitchStatus, newValue);
  };

  const status = <h1>{value}</h1>;

  return (
    <>
      <div>
        <div className="toggle" onClick={handleClick}>
          {toggleSwitch ? <div className="toggle_right">OFF</div> : <div className="toggle_left">ON</div>}
        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;
