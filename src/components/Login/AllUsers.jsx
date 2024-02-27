import { useState, useEffect } from "react";
import IsLoading from "../IsLoading/IsLoading";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { apiCall } from "../../utils/apiCall";
import loginStyles from "./login.module.scss"
import SingleUser from "./SingleUser";

export default function AllUsers({setCurrentTopic}) {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCurrentTopic(null);
    setIsLoading(true);
    setError(null);

    apiCall()
      .get("users")
      .then(({ data: { users } }) => {
        setAllUsers(users);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ err });
      });
  }, []);

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <ErrorHandler error={error} />}
      {(!error && !isLoading) && <>
      <section id={loginStyles["login-section"]} className="section is-large">
        <h2 className="title is-3 has-text-centered">Users</h2>
        <ul className={loginStyles["list-all-users"]}>
            {allUsers.map(user => {
                return <SingleUser user={user} key={user.username} />
            })}
        </ul>
      </section>
      </>}
    </>
  );
}
