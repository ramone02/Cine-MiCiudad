import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar";

export const Public = () => {
  const routes = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/estrenos",
      name: "Estrenos",
    },
    {
      to: "/faqs",
      name: `Faq's`,
    },
  ];
  return (
    <>
      <Navbar routes={routes} />
      <Outlet />
      <h5>Footer</h5>
    </>
  );
};
