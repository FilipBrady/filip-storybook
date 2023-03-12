import styles from './Tooltip.module.scss';
import colors from '../../Colors.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

type TooltipProps = {
  value: string;
  children: any;
  align: 'start' | 'end' | 'top' | 'bottom';
};

export const Tooltip = ({ value, children, align }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={classNames(styles.div, styles[align])}>
      <span
        className={
          isHovered
            ? classNames(styles.tooltip, styles[align])
            : classNames(styles.hide)
        }
      >
        {value}
      </span>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    </div>
  );
};
