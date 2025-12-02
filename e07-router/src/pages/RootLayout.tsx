import { type FC } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const RootLayout: FC = () => (
  <div>
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/user/42">User 42</Link>
      <Link to="/search">Search (bez query)</Link>
      <Link to="/search/react">Search "react"</Link>
      <Link to="/neexistuje">404</Link>
    </nav>
    <hr />
    <Outlet />
  </div>
);

export default RootLayout;