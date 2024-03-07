'use client'

import Link from "next/link"
import styles from './navLink.module.css'
import { usePathname } from "next/navigation"
import clsx from 'clsx';
import ErrorBoundary from "@app/utils/error";

const NavLink = ({ item }) => {
    const pathName = usePathname()
  return (
    <ErrorBoundary>
        <Link 
            href={item.path} 
            // className={`${styles.container} ${
            //     pathName === item.path && styles.active
            //     }`}
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