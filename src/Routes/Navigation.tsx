import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="bg-violet-900">
        <nav>
          <ul>
            <NavLink
              to="/"
              className={(isActive) => (isActive ? "is-active" : "")}
            >Home</NavLink>
            <NavLink
              to="/estrenos"
              className={(isActive) => (isActive ? "is-active" : "")}
            >Estrenos</NavLink>
            <NavLink
              to="/faq's"
              className={(isActive) => (isActive ? "is-active" : "")}
            >Faq's</NavLink>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/estrenos" element={<h1>Estrenos</h1>} />
        <Route path="/faqs" element={<h1>Faq's</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
