import { FaUserCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { Navbarlinks } from "../../data/Navbaritem";
import { useEffect } from "react";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const location = useLocation();
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navbarlinks.map((data, index) => (
              <li key={index}>
                <NavLink
                  to={data.link}
                  className={`mb-5 inline-block" ${(navClass) =>
                    navClass.isActive ? "active" : ""}`}
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made by <a href="/">Saba Ali</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
