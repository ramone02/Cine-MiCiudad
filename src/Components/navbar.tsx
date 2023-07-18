import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../Interfaces';

export const Navbar = ({routes}:  NavbarProps) => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-grey-800 p-6'>
        <div>
                {/* Logo */}
        </div>
        <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 rounded text-teal-200 border-top'>

            </button>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <ul>
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
    </nav>
  )
}
