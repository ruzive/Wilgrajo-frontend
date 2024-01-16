import Link from "next/link"


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
    <div>{links.map((link=>(
      <Link href={link.path} key={link.title}>{link.title}</Link>
    )))}</div>
  )
}
