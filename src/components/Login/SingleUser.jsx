import loginStyles from "./login.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function SingleUser({ user }) {
  const {setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentUser(user)
    navigate(-1)
  };

  return (
    <>
      <li className={`${loginStyles["list-item"]}`}>
        <form className={`${loginStyles["center-element"]}`} onSubmit={handleSubmit}>
          <button className={loginStyles.button} type="submit">
            <p className={`subtitle is-5 ${loginStyles["center-element"]}`}>
              <b>{user.name}</b>
            </p>
            <div className={`${loginStyles["center-element"]}`}>
              <figure className={`image is-1-by-1 ${loginStyles["container"]}`}>
                <img
                  className={`is-centered ${loginStyles["img"]}`}
                  src={user.avatar_url}
                  alt={`image of user ${user.username}`}
                />
              </figure>
            </div>
            <p className={loginStyles["center-element"]}>{user.username}</p>
          </button>
        </form>
      </li>
    </>
  );
}
