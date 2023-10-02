import {Card, RangeSlider, Stack} from '@shopify/polaris';
import React, {useState, useCallback} from 'react';
import {timing} from '@assets/config/settingConfig';

function TimingSlider({itemKey}) {
  const timingSlider = timing.find(item => item.key === itemKey);
  const [rangeValue, setRangeValue] = useState(timingSlider ? timingSlider.range : 100);

  const handleRangeSliderChange = useCallback(value => setRangeValue(value), []);

  return (
    <RangeSlider
      output
      label={timingSlider.label}
      min={0}
      max={60}
      value={rangeValue}
      onChange={handleRangeSliderChange}
      suffix={
        <Card>
          <Stack alignment="center">
            <Stack.Item fill>{rangeValue}</Stack.Item>
            <Stack.Item>second(s)</Stack.Item>
          </Stack>
        </Card>
      }
      helpText={timingSlider.helperText}
    />
  );
}

export default TimingSlider;
