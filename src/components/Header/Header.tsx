import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Holmenkollen-Riis speidergruppe</h1>
      <nav>
          <ul>
            <li>
              <Link to='/'>Om</Link>
            </li>
            <li>
              <Link to='/kontakt'>Kontakt</Link>
            </li>
            <li>
              <Link to='/hytter'>Hytter</Link>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Header;