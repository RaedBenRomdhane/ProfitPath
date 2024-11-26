import React from 'react';
import Select from 'react-select';
import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa';

const options = [
  { value: 'apple', label: <><FaApple /> Apple</> },
  { value: 'android', label: <><FaAndroid /> Android</> },
  { value: 'windows', label: <><FaWindows /> Windows</> },
];

const CustomDropdown = () => {
  return (
    <div className="input-group">
      <span className="input-icon">&#128247;</span>
      <Select
        options={options}
        className="input-field"
        placeholder="Select Category"
      />
    </div>
  );
};

export default CustomDropdown;
