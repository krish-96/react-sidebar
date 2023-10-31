import React, { useState, useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SidebarData } from "./sidebar";

function NavBar() {
  const newUniqueId = useId();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [activeNavLink, setActiveNavLink] = useState("/");
  console.log("setActiveNavLink ", activeNavLink);
  console.log("location ", location, location.pathname);
  const fileteredSideBar = SidebarData.filter((sidebar) => {
    if ((sidebar.path === "/signin" || sidebar.path === "/signup") && token)
      return;
    else if (sidebar.path === "/signout" && !token) return;

    return sidebar;
  });

  return (
    <div className="px-3 py-3 bg-light sticky-top">
      <button
        className="btn btn-dark"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>{" "}
      <Link to="/" className="navbar-brand text-dark font-weight-bold">
        HGL Shop
      </Link>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            HGL Shop
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            {fileteredSideBar.map((sideBarOption, index) => (
              <li
                className={
                  location.pathname === sideBarOption.path
                    ? "nav-item bg-dark text-light"
                    : "nav-item "
                }
                key={`${newUniqueId}-${index}`}
              >
                <Link
                  className={
                    location.pathname === sideBarOption.path
                      ? "nav-link text-light"
                      : "nav-link"
                  }
                  aria-current="page"
                  data-bs-dismiss="offcanvas"
                  to={sideBarOption.path}
                  onClick={(e) => {
                    console.log(
                      "event ",
                      e.currentTarget,
                      e.currentTarget.innerText
                    );
                    setActiveNavLink(`${sideBarOption.path}`);
                  }}
                >
                  {sideBarOption.icon} {sideBarOption.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
