import {Stack, Checkbox} from '@shopify/polaris';
import React, {useState} from 'react';
import {checkbox} from '@assets/config/settingConfig';

function CustomCheckbox({itemKey}) {
  const foundCheckbox = checkbox.find(item => item.key === itemKey);
  const [isChecked, setIsChecked] = useState(foundCheckbox ? foundCheckbox.checked : false);

  const handleCheckboxChange = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <Stack>
      {foundCheckbox && (
        <Checkbox label={foundCheckbox.label} checked={isChecked} onChange={handleCheckboxChange} />
      )}
    </Stack>
  );
}

export default CustomCheckbox;
