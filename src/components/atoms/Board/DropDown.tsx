import { useState } from 'react';
import { StyledDropDown } from '@/styles/components/Board/Board';

type DropDown = {
  options: string[];
};

export function DropDown({ options }: DropDown) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // 옵션 선택 후 드롭다운 닫기
  };

  return (
    <StyledDropDown>
      <button className="DropDownButton" onClick={toggleDropdown}>
        {selectedOption}
        <img className="DropDownSvg" src="./../public/dropdown.svg" alt="드롭박스버튼"></img>
      </button>
      {isOpen && (
        <ul className="DropDownList">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              <button className="DropDownOption">{option}</button>
            </li>
          ))}
        </ul>
      )}
    </StyledDropDown>
  );
}
