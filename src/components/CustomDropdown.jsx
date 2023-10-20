import React, { useState } from 'react';
import './CustomDropdown.css';

const options = ['Option 1', 'Option 2', 'Option 3'];

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className={`custom-dropdown ${isOpen ? 'active' : ''}`}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Select an option'}
      </div>
      <div className="options">
        {isOpen &&
          options.map((option, index) => (
            <div key={index} style={{color: 'black'}}>
              <input 
                type="radio"
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
