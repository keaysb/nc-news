import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Login/UserContext";
import { apiCall } from "../../../utils/apiCall";
import postCommentStyles from "./postComment.module.scss"

export default function PostComment({ allComments, setAllComments }) {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    username: currentUser.username,
    body: "",
  });
  const [isClosed, setIsClosed] = useState(true);

  const handleChange = (event) => {
    setNewComment({ ...newComment, body: event.target.value });
  };

  const handleClickClose = (event) => {
    event.preventDefault();
    setIsClosed(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newComment.username) {
      setIsClosed(false);
    } else {
      apiCall()
        .post(`articles/${article_id}/comments`, newComment)
        .then(({ data: { comment } }) => {
          setAllComments([comment, ...allComments]);
          console.log(allComments)
        });
      setNewComment({ ...newComment, body: "" });
    }
  };

  return (
    <>
      <form className={`${postCommentStyles["post-comment-form"]}`} onSubmit={handleSubmit}>
        <input
          className="input is-rounded"
          type="text"
          placeholder="Add comment"
          name="comment_body"
          value={newComment.body}
          onChange={handleChange}
          required
        />
        <button className={`button is-danger ${postCommentStyles["post-comment-button"]}`} type="submit">
          Submit
        </button>
      </form>
      {!isClosed && (
        <article id={`${postCommentStyles["post-comment-error"]}`} className="message is-danger">
          <div className="message-header">
            <p>Select a user</p>
            <button
              className="delete"
              aria-label="delete"
              onClick={handleClickClose}
            ></button>
          </div>
          <div className="message-body">
            <p>Please select a user to post a comment</p>
          </div>
        </article>
      )}
    </>
  );
}
