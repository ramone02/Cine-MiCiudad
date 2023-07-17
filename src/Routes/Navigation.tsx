import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./route";
import { Navbar } from "../Components/navbar";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar routes={routes}/>
      <Routes>
        {routes &&
          routes.map((route) => (
            <Route
              key={route.to}
              path={route.path}
              element={<route.Component />}
            />
          ))}
          <Route
              path="*"
              element={<Navigate to={routes[0].to} replace />}
            />
      </Routes>
    </BrowserRouter>
  );
};
