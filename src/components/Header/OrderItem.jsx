import { useContext } from "react";
import { OrderContext } from "./OrderContext";
import navbarStyles from "./navbar.module.scss";
import { Link } from "react-router-dom";

export default function OrderItem({ order, isDropdownHiddenOrders }) {
  const { setCurrentOrder } = useContext(OrderContext);

  const handleOnClick = () => {
    setCurrentOrder(`order=${order}`);
  };

  return (
    <Link
      className={`navbar-item ${navbarStyles.p} ${isDropdownHiddenOrders}`}
      onClick={handleOnClick}
      to="/"
    >
      {order === "asc" ? "Ascending" : "Descending"}
    </Link>
  );
}