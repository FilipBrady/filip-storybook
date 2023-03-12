import styles from './Snackbar.module.scss';
import colors from '../../Colors.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

type SnackbarProps = {
  message: string;
  color: 'primary' | 'secondary' | 'succes' | 'error';
  hideTimeDuration: number;
  align:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'left-center'
    | 'right-center';
};

export const Snackbar = ({
  message,
  color,
  hideTimeDuration,
  align,
}: SnackbarProps) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(true);

    setInterval(() => {
      setIsShown(false);
    }, hideTimeDuration);
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>Click on meeee</button>
      </div>
      <div
        className={
          isShown
            ? classNames(styles.snackbar, styles[color], styles[align])
            : classNames(styles.hidden)
        }
      >
        <div>{message}</div>
        <div
          className={classNames(styles.close)}
          onClick={() => setIsShown(false)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='white'
            width='25px'
            height='25px'
            viewBox='0 0 1024 1024'
          >
            <path d='M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z' />
          </svg>
        </div>
      </div>
    </div>
  );
};
