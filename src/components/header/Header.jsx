import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import headerStyles from "./header.module.scss";
import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";

export default function Header({ currentTopic }) {
  return (
    <header className="has-text-centered">
      <Navbar />
      <Link to="/">
        <h1 className={`title is-1 ${headerStyles.title}`}>NC News</h1>
      </Link>
      {currentTopic && (
        <p className={`subtitle is-5 ${headerStyles.subtitle}`}>
          {capitaliseFirstLetter(currentTopic)}
        </p>
      )}
    </header>
  );
}
