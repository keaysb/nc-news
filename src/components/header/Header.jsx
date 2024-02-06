import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <Link to="/">
      <h1>NC News</h1>
      </Link>
    </header>
  );
}
