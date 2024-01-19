import Link from "next/link"
import NavLink from "../navLink/NavLink"


const Links = () => {

  const links = [
    {
      title:"Homepage",
      path:"/",

    },
    {
      title:"About",
      path:"/about",

    },
    {
      title:"Contact Us",
      path:"/contact-us",

    },
  ]
  // TEMPORARY
  const session = true
  const isAdmin = true
  return (  
    <div className="links">
      {links.map((link=>(
        <NavLink item={link} key={link.path}/>
       )))}
      {session ? (
       <>
        
          {isAdmin && <NavLink item={{title : "Admin", path: "/admin"}}/>} 
          <button className="logout">Logout</button>
        
        </>
      ) : (
        <NavLink item={{title : "Login", path: "/login"}} />
      )}
    </div>
  )
}

export default Links