import { useEffect, useState } from "react";
import errorHandlerStyles from "./errorHandler.module.scss";

export default function ErrorHandlerSub({ error, counter}) {
  const { message } = error.err;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true)
  }, [counter])


  const handleOnClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            id={errorHandlerStyles["error-position"]}
            className="message is-danger"
          >
            <div className="message-header">
              <p>Something went wrong</p>
              <button
                className={`delete`}
                onClick={handleOnClick}
                aria-label="delete"
              ></button>
            </div>
            <div className="message-body">
              <p>{message}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
