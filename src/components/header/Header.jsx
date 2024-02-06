import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import headerStyles from "./header.module.scss"

export default function Header() {
  return (
    <header className="has-text-centered">
      <Navbar />
      <Link to="/">
      <h1 className={`title is-1 ${headerStyles.title}`}>NC News</h1>
      </Link>
    </header>
  );
}
