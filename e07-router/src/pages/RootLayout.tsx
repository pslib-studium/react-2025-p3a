import { type FC } from "react";
import { Link, Outlet } from "react-router-dom";

export const RootLayout: FC = () => (
  <div>
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
      <Link to="/">Home</Link>
      <Link to="/user/42">User 42</Link>
      <Link to="/user/14">User 14 (redirect)</Link>
      <Link to="/search">Search (bez query)</Link>
      <Link to="/search/react">Search "react"</Link>
      <Link to="/neexistuje">404</Link>
    </nav>
    <hr />
    <main style={{ padding: "1rem" }}>
      <Outlet />
    </main>
  </div>
);

export default RootLayout;