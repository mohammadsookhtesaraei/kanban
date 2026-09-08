import { type ComponentProps, type ReactNode, use } from 'react';

import clsx from 'clsx';

import Initials from '@/components/Initials/Initials';
import SidebartItem from '@/components/Sidebar/components/SidebartItem/SidebartItem';
import { SideBarContext } from '@/components/Sidebar/context/sidebar-context';

import { BoardsContext } from '@/context/board-context';

import MingcuteHome7Line from '@/icons/MingcuteHome7Line';
import MingcuteSettings5Line from '@/icons/MingcuteSettings5Line';

import styles from './SidebarGroups.module.css';

type SideBarGroups = {
  title?: string;
  item: ComponentProps<typeof SidebartItem>[];
};

const SidebarGroups = (): ReactNode => {
  const { boards } = use(BoardsContext);

  const { isCollapsed } = use(SideBarContext);

  const gruops: SideBarGroups[] = [
    {
      item: [
        {
          href: '/',
          title: 'Home',
          color: 'gray',
          icon: <MingcuteHome7Line />,
        },
      ],
    },

    {
      title: 'System',
      item: [
        {
          href: '/setting',
          title: 'Settings',
          color: 'gray',
          icon: <MingcuteSettings5Line />,
        },
      ],
    },

    {
      title: 'Boards',
      item: boards.map((board) => ({
        title: board.title,
        href: `/board/${board.id}`,
        color: board.color,
        icon: <Initials title={board.title} color={board.color} />,
      })),
    },
  ];
  return gruops.map((group, index) => (
    <div
      key={index}
      className={clsx(styles.group, isCollapsed && styles.collapsed)}
    >
      {group.title && <div>{isCollapsed ? group.title[0] : group.title}</div>}
      <ul>
        {group.item.map((item) => (
          <li key={item.href}>
            <SidebartItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  ));
};

export default SidebarGroups;
