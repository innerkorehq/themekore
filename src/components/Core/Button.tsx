import React, { FC } from 'react';

export type ButtonTypes = {
  /** Label of the button */
  label: string;

  /** Type attribute of button*/
  type: 'button' | 'submit' | 'reset';

  /** Style of the Button */
  style: 'normal' | 'outlined' | 'text';

  /** Button click action */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** Button size */
  size: 'small' | 'medium' | 'large';

  /** Add classes to component */
  className?: string;

  /** Add href to anchor tag */
  href?: string;

  /** Open link in new tab */
  target: '_blank' | '_self' | '_parent' | '_top';
};

const textClasses = 'rounded outline-none tracking-wider font-bold';
const normalClassses = `${textClasses} bg-teal-400 text-white`;
const outlinedClasses = `${textClasses} border border-teal-400 text-teal-400`;
const smallClasses = 'text-xs px-3 py-1';
const mediumClasses = 'text-md px-4 py-2';
const largeClasses = 'text-xl px-16 py-4';

export const Button: FC<ButtonTypes> = ({
  onClick,
  type,
  label = 'Button',
  style = 'normal',
  size = 'medium',
  className,
  href,
  target,
}) => {
  let btnSize = mediumClasses;
  if (size === 'small') {
    btnSize = smallClasses;
  } else if (size === 'large') {
    btnSize = largeClasses;
  }

  let styleType = normalClassses;
  if (style === 'text') {
    styleType = textClasses;
  } else if (style === 'outlined') {
    styleType = outlinedClasses;
  }

  let btnVariables = `${btnSize} ${styleType} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={btnVariables}
        target={target}
      >
        {label}
      </a>
    );
  } else if (type == 'submit') {
    return (
      <input 
        type= 'submit' value={label}
        onClick={onClick} className={btnVariables}>
      </input>
    );
  }   
  
  else {
    return (
      <button       
        type={type ? type : 'button'}
        onClick={onClick} className={btnVariables}
        target={target}
      >
        {label}
      </button>
    );
  }
};

export default Button;
