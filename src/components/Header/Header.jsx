import Navbar from "./Navbar";
import headerStyles from "./header.module.scss";
import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";

export default function Header({ currentTopic }) {
  return (
    <header className={`has-text-centered ${headerStyles.header}`}>
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
