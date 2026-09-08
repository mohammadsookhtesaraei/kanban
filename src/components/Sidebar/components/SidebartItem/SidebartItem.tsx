import type { ReactNode } from 'react';

import { NavLink } from 'react-router';

import clsx from 'clsx';

import type { BoardColor } from '@/types/board';

import stylse from './SidebartItem.module.css';

type Props = {
  href?: string;
  title: string;
  color: BoardColor;
  icon: ReactNode;
  onClick?: () => void;
};

const SidebartItem = ({
  href,
  title,
  color,
  icon,
  onClick,
}: Props): ReactNode => {
  const className = clsx(stylse['sidebar-item'], color);
  const children = (
    <>
      <span className={stylse.icon}>{icon}</span>
      <span className={stylse.title}>{title}</span>
    </>
  );

  if (!href) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) => clsx(className, isActive && stylse.active)}
    >
      {children}
    </NavLink>
  );
};

export default SidebartItem;
