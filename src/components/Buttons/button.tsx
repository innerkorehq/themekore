import React, { FC } from "react";

export type ButtonTypes = {
  /**
   * Label of the button
   */
  label: string;
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * Button type
   */
  type: string;
  /**
   * Button click action
   */
  onClick(): void;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const BASE_BUTTON =
  'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg';
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-teal-400 border border-teal-400 text-white`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-teal-400 text-teal-400`;

export const Button: FC<ButtonTypes> = ({ onClick, label = 'Some label', outlined, type, className }) => {
  return (
    <button
      onClick={onClick}
      type={type ? 'button' : 'submit'}
      className={`${outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON} ${className}`}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;