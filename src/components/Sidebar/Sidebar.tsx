import type { ReactNode } from 'react';

import { Link } from 'react-router';

import SidebarGroups from '@/components/Sidebar/components/SidebarGroups/SidebarGroups';
import SidebartItem from '@/components/Sidebar/components/SidebartItem/SidebartItem';

import MingcuteExitLine from '@/icons/MingcuteExitLine';

import styles from './SideBar.module.css';

const Sidebar = (): ReactNode => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.svg" alt="kanban" />
        </Link>
      </div>
      <nav>
        <SidebarGroups />
      </nav>
      <div className={styles.footer}>
        <SidebartItem
          title="Sing Out"
          color="gray"
          icon={<MingcuteExitLine />}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
