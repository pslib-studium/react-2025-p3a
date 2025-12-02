import { type FC } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: FC = () => (
  <div>
    <h1>404 – Stránka nenalezena</h1>
    <p>Tahle cesta v routeru neexistuje.</p>
    <Link to="/">Zpět na Home</Link>
  </div>
);

export default NotFoundPage;