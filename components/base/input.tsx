import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  name: string;
  type: string;
  focus: boolean;
  register: UseFormRegisterReturn;
  required: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ name, type, register, required, placeholder, focus }) => {
  return (
    <div className={`relative ${!focus ? 'text-gray-400' : ''}`}>
      <span className={`absolute text-xs font-light -top-2 left-3 px-1 transition-colors ease-out ${focus ? 'bg-[#4F7FFF]' : 'bg-black'}`}>
        {name}
      </span>
      <input
        {...register}
        placeholder={placeholder}
        required={required}
        type={type}
        className={`w-full bg-transparent outline-none p-1 border-[1px] rounded-sm text-xs font-light px-3 h-9 placeholder:font-light ${
          !focus ? 'border-gray-400' : 'border-white'
        }`}
        disabled={!focus}
      />
    </div>
  );
};

export default Input;
