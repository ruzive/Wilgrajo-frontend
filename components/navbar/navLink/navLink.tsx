'use client'

import Link from "next/link"
import styles from './navLink.module.css'
import { usePathname } from "next/navigation"
import clsx from 'clsx';

const NavLink = ({ item }) => {
    const pathName = usePathname()
  return (
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
  )
}

export default NavLink