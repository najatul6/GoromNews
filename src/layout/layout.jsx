import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto font-Montserrat">
        <Outlet/>
        <footer className="footer footer-center bg-base-100 text-base-content p-4">
        <aside>
          <p>
            Copyright &copy; 2024 - All right reserved by{" "}
            <Link to="https://najatul-islam.vercel.app" className="font-bold">Md Najatul Islam</Link>
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default Layout