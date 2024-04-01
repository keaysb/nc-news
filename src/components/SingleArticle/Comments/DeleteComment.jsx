import { useContext, useState } from "react";
import { UserContext } from "../../Login/UserContext";
import deleteCommentStyles from "./deleteComment.module.scss";
import { apiCall } from "../../../utils/apiCall";
import ErrorHandlerSub from "../../ErrorHandler/ErrorHandlerSub";

export default function DeleteComment({
  comment,
  allComments,
  setAllComments,
}) {
  const { currentUser } = useContext(UserContext);
  const [isActive, setIsActive] = useState("");
  const [color, setColor] = useState("black");
  const [error, setError] = useState(null);
  const [errorCounter, setErrorCounter] = useState(0);

  const handleClickDropdown = (event) => {
    event.preventDefault();
    if (isActive === "") {
      setIsActive("is-active");
      setColor("red");
    } else {
      setIsActive("");
      setColor("black");
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    apiCall()
      .delete(`comments/${comment.comment_id}`)
      .then(() => {
        setAllComments(
          allComments.filter((review) => review.comment_id !== comment.comment_id)
        );
      })
      .catch((err) => {
        console.log(err);
        console.log(comment.comment_id)
        setError({ err });
        setErrorCounter(errorCounter + 1);
      });
  };

  return (
    <>
      {error && <ErrorHandlerSub error={error} errorCounter={errorCounter} />}
      {currentUser.username === comment.author && (
        <>
          <div
            className={`dropdown is-right ${isActive} ${deleteCommentStyles["single-comment-dropdown"]}`}
            style={{ color: color }}
          >
            <div className="dropdown-trigger">
              <a
                className={`button ${deleteCommentStyles["single-comment-dropdown-button"]}`}
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={handleClickDropdown}
              >
                <ion-icon name="caret-down-circle-outline"></ion-icon>
              </a>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div
                className={`dropdown-content ${deleteCommentStyles["single-comment-dropdown-content"]}`}
              >
                <form onSubmit={handleOnSubmit}>
                  <button
                    className={`button dropdown-item is-danger`}
                    type="submit"
                  >
                    Delete Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
