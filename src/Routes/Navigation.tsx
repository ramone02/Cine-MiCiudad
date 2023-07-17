import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { routes } from "./route";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <nav className=" bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {routes &&
                routes.map((route) => (
                  <li
                    key={route.to}
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  >
                    <NavLink
                      to={route.to}
                      className={(isActive) => (isActive ? "is-active" : "")}
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        {routes &&
          routes.map((route) => (
            <Route
              key={route.to}
              path={route.path}
              element={<route.Component />}
            />
          ))}
      </Routes>
    </BrowserRouter>
  );
};
