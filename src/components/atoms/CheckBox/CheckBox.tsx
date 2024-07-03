import { StyledCheckBoxLabel, StyledCheckBoxImg } from '@/styles/components/Editor/Editor';

type CheckBoxProps = {
  label: string;
};

import { useState } from 'react';

const Checkbox = ({ label }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const CheckboxImgSrc = {
    checked: '../../../../public/checkBoxAfter.svg',
    unchecked: '../../../../public/checkBoxBefore.svg',
  };
  return (
    <StyledCheckBoxLabel>
      <StyledCheckBoxImg src={isChecked ? CheckboxImgSrc.checked : CheckboxImgSrc.unchecked} alt="" />
      <input type="checkbox" checked={isChecked} onChange={handleChange} style={{ display: 'none' }} />
      {label}
    </StyledCheckBoxLabel>
  );
};

export default Checkbox;
