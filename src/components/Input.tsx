import * as React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  children: React.ReactNode;
  id: string;
  inputStyle: string;
  labelStyle: string;
}
export const Input: React.FC<InputProps> = ({
  children,
  id,
  inputStyle,
  labelStyle,
  ...inputProps
}) => {
  return (
    <>
      <input id={id} {...inputProps} className={inputStyle} />
      <label className={labelStyle} htmlFor={id}>
        {children}
      </label>
    </>
  );
};
