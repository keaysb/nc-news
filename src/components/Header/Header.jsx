import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import headerStyles from "./header.module.scss";
import errorHandlerStyles from "../ErrorHandler/errorHandler.module.scss";
import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";

export default function Header({ currentTopic, stopScroll }) {
  return (
    <header className={`has-text-centered ${headerStyles.header} ${errorHandlerStyles[stopScroll]}`}>
      <Navbar />
      {currentTopic && (
        <>
          <p className={`subtitle is-4 has-text-weight-semibold is-underlined ${headerStyles.subtitle}`}>
            {capitaliseFirstLetter(currentTopic)}
          </p>
        </>
      )}
    </header>
  );
}
