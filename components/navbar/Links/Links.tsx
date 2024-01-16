import Link from "next/link"
import { NavLink } from "../navLink/NavLink"


export const Links = () => {

  const links = [
    {
      title:"Homepage",
      path:"/"

    },
    {
      title:"About",
      path:"/about"

    },
    {
      title:"Contact Us",
      path:"/contact-us"

    }
  ]
  return (
    <div className="links">{links.map((link=>(
      <NavLink item={link} key={link.title}/>
    )))}</div>
  )
}
