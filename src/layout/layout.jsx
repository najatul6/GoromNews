import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto font-Montserrat">
        <Outlet/>
    </div>
  )
}

export default Layout