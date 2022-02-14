import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  value: string
  name: string;
  onChange: (e: any) => void;
}

export default function Input(props: InputProps) {
  const {
    label, name, onChange, ...nativeProps
  } = props;

  return (
    <>
      <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        name={name}
        onChange={onChange}
        aria-describedby="name"
        {...nativeProps}
      />
    </>
  );
}
