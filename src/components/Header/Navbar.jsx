import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Login/UserContext";
import navbarStyles from "./navbar.module.scss";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  const [isActive, setIsActive] = useState("");
  const [isInvisible, setIsInvisible] = useState("");


  const handleOnClick = () => {
    if(isActive === ""){
        setIsActive("is-active")
        setIsInvisible("hide-icon")
    } else {
        setIsActive("")
        setIsInvisible("")
    }
  }

  return (
    <nav
      className={`navbar is-transparent ${navbarStyles["all-navbar"]}`}
      role="navigation"
      aria-label="main navigation"
    >
      {currentUser ? (
        <>

          <div className={`navbar-brand ${navbarStyles["navbar-brand"]}`}>
            <div className={`navbar-burger ${navbarStyles.burger}`} onClick={handleOnClick} data-target="navMenu">
              <span className={navbarStyles.burger} aria-hidden="true"></span>
              <span className={navbarStyles.burger} aria-hidden="true"></span>
              <span className={navbarStyles.burger} aria-hidden="true"></span>
            </div>
          </div>

          <div
            className={`navbar-menu is-shadowless ${isActive} p-0 ${navbarStyles["navbar-menu"]}`}
          >
            <div
              className={`navbar-end ${navbarStyles["all-end-navbar"]}`}
            >
              <div
                className={`navbar-item has-dropdown is-hoverable ${navbarStyles["user-navbar"]}`}
              >
                <p className={`${navbarStyles.element} ${navbarStyles.p} ${navbarStyles["p-current-user"]}`}>
                 <b>{currentUser.username}</b>
                </p>
                <figure className={`${navbarStyles.element} ${navbarStyles.element}`}>

                <img
                  src={currentUser.avatar_url}
                  alt={`avatar image for ${currentUser.username}`}
                />
                </figure>
                <div className={`${navbarStyles.element} ${navbarStyles.icon} ${navbarStyles[isInvisible]}`}>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                <div className="navbar-dropdown is-left">
                  <div className={`navbar-item is-justify-content-center ${navbarStyles["remove-padding"]}`}>
                    <Link to="/users">
                      <p className={`button ${navbarStyles["change-user"]}`}>Change User</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`navbar-brand ${navbarStyles["navbar-brand"]}`} onClick={handleOnClick}>
            <div className={`navbar-burger burger ${navbarStyles.burger}`}>
              <span className={navbarStyles.burger} aria-hidden="true"></span>
              <span className={navbarStyles.burger} aria-hidden="true"></span>
              <span className={navbarStyles.burger} aria-hidden="true"></span>
            </div>
          </div>
          <div
            className={`navbar-menu is-shadowless ${isActive} ${navbarStyles["navbar-menu"]}`}
          >
            <div
              className={`navbar-end ${navbarStyles["all-end-navbar"]} is-active`}
            >
              <div className={`navbar-item button ${navbarStyles["user-navbar"]}`}>
                <Link to="/users">
                  <div
                    className={`${navbarStyles.element} ${navbarStyles["no-user-icon"]}`}
                  >
                    <ion-icon name="person"></ion-icon>
                  </div>
                  <p className={`${navbarStyles.p}`}>Select User</p>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
