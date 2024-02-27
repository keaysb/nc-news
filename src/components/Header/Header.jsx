import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import headerStyles from "./header.module.scss";
import errorHandlerStyles from "../ErrorHandler/errorHandler.module.scss";
import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";

export default function Header({ currentTopic, stopScroll }) {
  return (
    <header className={`has-text-centered ${errorHandlerStyles[stopScroll]}`}>
      <Navbar />
      <Link className={headerStyles.header} to="/">
        <figure className={`image is-1-by-1 ${headerStyles["container"]}`}>
          <img
            className={`is-centered ${headerStyles["img"]}`}
            src="/northcoders-logo.svg"
            alt="Northcoders Logo"
          />
        </figure>
        <h1 className={`title is-1 ${headerStyles.title}`}>
          <span style={{ color: "rgb(244,67,54)" }}>NC</span>&nbsp;News
        </h1>
      </Link>
      {currentTopic && (
        <>
          <p className={`subtitle is-5 ${headerStyles.subtitle}`}>
            {capitaliseFirstLetter(currentTopic)}
          </p>
        </>
      )}
    </header>
  );
}
