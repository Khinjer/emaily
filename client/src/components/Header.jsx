import React from "react";

export default function Header() {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul class="right">
            <li>
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
