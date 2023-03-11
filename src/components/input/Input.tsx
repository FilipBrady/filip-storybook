import styles from './Input.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

type InputProps = {
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  value?: string | number;
  onChange(vlue: string | number): void;
  title?: string;
  variant: 'primary' | 'filled' | 'disabled' | 'outlined';
};

export const Input = ({
  type,
  placeholder,
  value,
  title,
  onChange,
  variant,
}: InputProps) => {
  return (
    <label className={classNames(styles.label, styles[variant])}>
      {title && <span className={classNames(styles.span, styles[variant])}>{title}</span>}
      <input
        //TODO
        disabled={variant === 'disabled'}
        className={classNames(styles.input, styles[variant])}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        />
    </label>
  );
};
