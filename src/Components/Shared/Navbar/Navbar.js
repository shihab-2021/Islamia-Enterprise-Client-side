import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl text-yellow-500 italic font-serif">
            Islamia Enterprise
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
