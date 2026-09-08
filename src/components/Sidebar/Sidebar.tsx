import { type ReactNode, useState } from 'react';

import { Link } from 'react-router';

import clsx from 'clsx';

import IconButton from '@/components/IconButton/IconButton';
import SidebarGroups from '@/components/Sidebar/components/SidebarGroups/SidebarGroups';
import SidebartItem from '@/components/Sidebar/components/SidebartItem/SidebartItem';
import { SideBarContext } from '@/components/Sidebar/context/sidebar-context';

import MingcuteArrowsRightLine from '@/icons/MingcuteArrowsRightLine';
import MingcuteExitLine from '@/icons/MingcuteExitLine';

import styles from './SideBar.module.css';

const Sidebar = (): ReactNode => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleArrowClick = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <SideBarContext value={{ isCollapsed }}>
      <aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            <img
              src={isCollapsed ? '/favicon.svg' : '/logo.svg'}
              alt="Canban"
            />
          </Link>
          <IconButton className={styles.arrow} onClick={handleArrowClick}>
            <MingcuteArrowsRightLine />
          </IconButton>
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
    </SideBarContext>
  );
};

export default Sidebar;
