// import Links from "./Links/Links"

import Links from "./Links/Links"

const Nav = () => {
  return (
    <div className="container" style={{ width: 'calc(40% - 10px)', position: 'fixed', top: 0, right: 0, height: '40px',zIndex: 1000  }}> 
      <Links/>
    </div>
  )
}

export default Nav