import React, { FunctionComponent, useState } from 'react';

// Temporary component, will be deleted in the next PR
export const TemporaryTestComponent: FunctionComponent<{ labelOn: string; labelOff: string }> = ({
  labelOn,
  labelOff,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};
