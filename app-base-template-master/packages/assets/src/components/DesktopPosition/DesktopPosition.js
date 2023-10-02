import React from 'react';
import './DesktopPosition.css';
export const DesktopPosition = ({selected = false, position = '_topLeft', onChange = () => {}}) => {
  return (
    <div
      className={`Mageplaza-DesktopPosition ${selected ? '_selected' : ''}`}
      onClick={() => onChange(position)}
    >
      <div
        className={`Mageplaza-DesktopPosition__Option ${position} ${selected ? '_selected' : ''}`}
      ></div>
    </div>
  );
};
