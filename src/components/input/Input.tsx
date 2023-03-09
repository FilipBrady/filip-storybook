import { FC } from 'react';

interface InputProps {
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  value?: string | number;
  onChange(vaue: string | number): void;
  title?: string;
}

export const Input: FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value = '',
  title,
  onChange,
}) => {
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }} //TODO
    >
      {title && <span>{title}</span>}
      <input
        //TODO
        style={{ width: 150 }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};
