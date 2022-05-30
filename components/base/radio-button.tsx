import React from 'react';

interface RadioButtonProps {
  name: string;
  title: string;
  value: string;
  backgroundColor?: string;
  checked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, title, backgroundColor = 'black', checked = false }) => {
  return (
    <div className="space-x-2">
      <input
        className={`appearance-none rounded-full h-2 w-2 bg-${backgroundColor} ring-1 checked:bg-blue-500 checked:ring-offset-2 ring-offset-${backgroundColor}`}
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
