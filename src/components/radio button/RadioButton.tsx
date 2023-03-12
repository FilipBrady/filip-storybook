import styles from './RadioButton.module.scss';
import colors from '../../Colors.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
// import './RadioButton.module.scss'

type RadioButtonProps = {
  variant: 'default' | 'disabled' | 'checked';
  label: string;
  color: 'primary' | 'secondary' | 'succes' | 'error';
  align: 'start' | 'end' | 'top' | 'bottom';
};

export const RadioButton = ({
  variant,
  label,
  color,
  align,
}: RadioButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <div
      className={classNames(styles[align])}
      onClick={() => setIsChecked(!isChecked)}
    >
      <label className={classNames(styles.label)}>
        <span>{label}</span>
      </label>
      <input className={classNames(styles.input)}
        type='radio'
        checked={
          isChecked || variant === 'checked'
            ? true
            : variant === 'disabled'
            ? false
            : false
        }
      />
      <span className={classNames(styles.circle, styles[variant])}>
        <span className={classNames(styles.outerCircle)}>
          <svg
            width='25px'
            height='25px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={classNames(styles[color], styles[variant])}
          >
            <path d='M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z' />
          </svg>
        </span>
        <span
          style={
            isChecked && variant !== 'checked'
              ? { display: 'block' }
              : variant === 'checked'
              ? { display: 'block' }
              : { display: 'none' }
          }
          className={classNames(styles.innerCircle)}
        >
          <svg
            width='25px'
            height='25px'
            viewBox='0 0 1024 1024'
            xmlns='http://www.w3.org/2000/svg'
            className={classNames(styles[color], styles[variant])}
          >
            <circle cx='512' cy='512' r='256' fill-rule='evenodd' />
          </svg>
        </span>
      </span>
    </div>
  );
};
