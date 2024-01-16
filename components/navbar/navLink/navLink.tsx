import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavLink = ({item}) => {

    const pathName = usePathname()

  return (
    <div>
        <Link href={item.path} className={'container' ${pathName === item.title &&}}>
            {item.title}
        </Link>
    </div>
  )
}
