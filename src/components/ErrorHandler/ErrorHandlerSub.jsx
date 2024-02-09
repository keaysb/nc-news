import { useEffect, useState } from "react";
import errorHandlerStyles from "./errorHandler.module.scss"


export default function ErrorHandlerSub({error, setStopScroll}) {
  const {error : {err : {message}}} = error

    const errorMsg = error.err.response.data.msg
    const [isClosed, setIsClosed] = useState(true)
    
    useEffect(() => {
        setStopScroll("scrollFalse")
    }, [])

    const handleOnClick = () => {
        setIsClosed(false)
    setStopScroll("scrollTrue")
    }

  return (
    <>
    {isClosed && <>
      <div id={errorHandlerStyles["error-position"]}className="message is-danger">
        <div className="message-header">
          <p>Something went wrong</p>
          <button className={`delete`} onClick={handleOnClick} aria-label="delete"></button>
        </div>
        <div className="message-body">
          <p>{message}</p>
          <p>{errorMsg}</p>
        </div>
      </div>
    </>}
    </>
  );
}

