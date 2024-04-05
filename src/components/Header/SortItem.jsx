import { useContext } from "react";
import { SortContext } from "./SortContext";
import navbarStyles from "./navbar.module.scss";
import { Link } from "react-router-dom";

export default function SortItem({ sort, isDropdownHiddenSorts }) {
  const { setCurrentSort } = useContext(SortContext);

  const handleOnClick = () => {
    setCurrentSort(`sort_by=${sort}`);
  };

  return (
    <Link
      className={`navbar-item ${navbarStyles.p} ${isDropdownHiddenSorts}`}
      onClick={handleOnClick}
      to="/"
    >
      {sort === "created_at" ? "Created At" : "Votes"}
    </Link>
  );
}
