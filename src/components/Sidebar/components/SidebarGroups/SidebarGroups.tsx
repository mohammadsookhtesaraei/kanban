import { type ComponentProps, type ReactNode, use } from 'react';

import Initials from '@/components/Initials/Initials';
import SidebartItem from '@/components/Sidebar/components/SidebartItem/SidebartItem';

import { BoardsContext } from '@/context/board-context';

import MingcuteHome7Line from '@/icons/MingcuteHome7Line';
import MingcuteSettings5Line from '@/icons/MingcuteSettings5Line';

type SideBarGroups = {
  title?: string;
  item: ComponentProps<typeof SidebartItem>[];
};

const SidebarGroups = (): ReactNode => {
  const { boards } = use(BoardsContext);

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
    <div key={index}>
      {group.title && <div>{group.title}</div>}
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
