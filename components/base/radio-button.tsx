import React from 'react';

interface RadioButtonProps {
  name: string;
  title: string;
  value: string;
  checked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, title, checked = false }) => {
  return (
    <div className="space-x-2">
      <input
        className="appearance-none rounded-full h-2 w-2 bg-black ring-1 checked:bg-[#4F7FFF] checked:ring-offset-2 ring-offset-black"
        type="radio"
        id={title}
        name={name}
        value={value}
        defaultChecked={checked}
      />
      <label className="text-xs" htmlFor={title}>
        {title}
      </label>
    </div>
  );
};

export default RadioButton;
