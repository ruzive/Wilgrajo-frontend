'use client'

import Link from "next/link"
import styles from './navLink.module.css'
import { usePathname } from "next/navigation"
import clsx from 'clsx';
import ErrorBoundary from "@app/utils/error";

interface NavigationItem {
  path: string;
  title: string;
}
const NavLink = ({ item }: { item: NavigationItem }) => {
    const pathName = usePathname()
  return (
    <ErrorBoundary>
        <Link 
            href={item.path} 
            className={clsx({
                [styles.container]:true ,
                [styles.active]: pathName === item.path}
                )}
                >
            {item.title}
        </Link>
         </ErrorBoundary>
  );
};

export default NavLink;