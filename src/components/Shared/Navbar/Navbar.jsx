import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menu = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-3 px-3 bg-zinc-200 font-bold rounded-xl text-center"
            : " py-3 px-3 hover:bg-zinc-200 font-semibold rounded-xl text-center"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-3 px-3 bg-zinc-200 font-bold rounded-xl text-center"
            : " py-3 px-3 hover:bg-zinc-200 font-semibold rounded-xl text-center"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/career"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "py-3 px-3 bg-zinc-200 font-bold rounded-xl text-center"
            : "py-3 px-3 hover:bg-zinc-200 font-semibold rounded-xl text-center"
        }
      >
        Career
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content space-y-3 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{menu}</ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
            <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="user profile image" />
          </div>
        </div>
        <a className="btn btn-sm">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
