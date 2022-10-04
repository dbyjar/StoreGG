import { InputHTMLAttributes } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
export interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder: string;
  htmlFor: string;
}

export default function Input(props: inputProps) {
  const {
    label, type, placeholder, htmlFor, ...nativeProps
  } = props

  return (
    <>
      <label htmlFor={htmlFor} className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        name={htmlFor}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  )
}
