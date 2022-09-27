import React from 'react';

type Props = {
  //  TODO
  hours: number;
  minute: number;
  second: number;
};

const Clock = ({ hours, minute, second }: Props) => {
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        24 Hour Live Custom Component Clock
        {/* Label */}
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {hours}
      </span>
      :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {minute}
      </span>
      :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {second}
      </span>
    </div>
  );
};

export default React.memo(Clock);
