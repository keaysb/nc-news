import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Login/UserContext";
import navbarStyles from "./navbar.module.scss";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  const [isActive, setIsActive] = useState("");
  const [isInvisible, setIsInvisible] = useState("");

  const handleOnClick = () => {
    if (isActive === "") {
      setIsActive("is-active");
      setIsInvisible("hide-icon");
    } else {
      setIsActive("");
      setIsInvisible("");
    }
  };

  return (
    <nav
      className={`navbar has-shadow is-transparent ${navbarStyles["all-navbar"]}`}
      role="navigation"
      aria-label="main navigation"
    >
      {currentUser.username ? (
        <>
          <div className={`navbar-brand ${navbarStyles["navbar-brand"]}`}>
            <Link to="/">
              <div className={`navbar-item ${navbarStyles["navbar-item"]}`}>
                <figure
                  className={`image is-1-by-1 ${navbarStyles["container"]}`}
                >
                  <img
                    className={`is-centered ${navbarStyles["img"]}`}
                    src="/northcoders-logo.svg"
                    alt="Northcoders Logo"
                  />
                </figure>
                <h1 className={`title is-1 ${navbarStyles.title}`}>
                  <span style={{ color: "rgb(244,67,54)" }}>NC</span>&nbsp;News
                </h1>
              </div>
            </Link>

            <a
              role="button"
              className={`navbar-burger ${isActive} ${navbarStyles.burger}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={handleOnClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${isActive}`}>
          <div className="navbar-start">
            </div>
            <div className="navbar-end">
              <div className={`navbar-item ${navbarStyles["navbar-item"]}`}>
                <div className={`navbar-item has-dropdown is-hoverable is-danger ${navbarStyles["navbar-item"]}`}>
                  <div className={`navbar-link is-danger ${navbarStyles["user-navbar"]} is-hidden-touch`}>
                    <p
                      className={`${navbarStyles.element} ${navbarStyles.p}`}
                    >
                      <b>{currentUser.username}</b>
                    </p>
                    <figure
                      className={`${navbarStyles.element}`}
                    >
                      <img
                        src={currentUser.avatar_url}
                        alt={`avatar image for ${currentUser.username}`}
                      />
                    </figure>
                  </div>

                  <div className={`navbar-item is-danger ${navbarStyles["user-navbar"]} is-hidden-desktop`}>
                    <p
                      className={`${navbarStyles.element} ${navbarStyles.p}`}
                    >
                      <b>{currentUser.username}</b>
                    </p>
                    <figure
                      className={`${navbarStyles.element}`}
                    >
                      <img
                        src={currentUser.avatar_url}
                        alt={`avatar image for ${currentUser.username}`}
                      />
                    </figure>
                  </div>

                  <div className="navbar-dropdown">
                  <div className={`buttons ${navbarStyles["navbar-button"]}`}>
                  <Link to="/users">
                    <a className="button is-danger">
                      <strong>Change User</strong>
                    </a>
                  </Link>
                </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`navbar-brand ${navbarStyles["navbar-brand"]}`}>
            <Link to="/">
              <div className={`navbar-item ${navbarStyles["navbar-item"]}`}>
                <figure
                  className={`image is-1-by-1 ${navbarStyles["container"]}`}
                >
                  <img
                    className={`is-centered ${navbarStyles["img"]}`}
                    src="/northcoders-logo.svg"
                    alt="Northcoders Logo"
                  />
                </figure>
                <h1 className={`title is-1 ${navbarStyles.title}`}>
                  <span style={{ color: "rgb(244,67,54)" }}>NC</span>&nbsp;News
                </h1>
              </div>
            </Link>

            <a
              role="button"
              className={`navbar-burger ${isActive} ${navbarStyles.burger}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={handleOnClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${isActive}`}>
            <div className="navbar-start">
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className={`buttons ${navbarStyles["navbar-button"]}`}>
                  <Link to="/users">
                    <a className="button is-danger">
                      <strong>Select User</strong>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
