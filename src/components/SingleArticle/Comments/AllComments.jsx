import { useEffect, useState } from "react";
import { apiCall } from "../../../utils/apiCall";
import SingleComment from "./SingleComment";
import commentStyles from "./comments.module.scss";
import IsLoading from "../../IsLoading/IsLoading";
import ErrorHandler from "../../ErrorHandler/ErrorHandler";
import PostComment from "./PostComment";

export default function Comments({ article_id}) {
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null)

    apiCall()
      .get(`/articles/${article_id}/comments`)
      .then(({ data: { comments } }) => {
        setAllComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ err });
      });
  }, [article_id]);

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <ErrorHandler error={error} />}
      <section className={`all-comments ${commentStyles["all-comments"]}`}>
        <h3 id={commentStyles["title-responsive"]} className="title is-5">
          {allComments.length} Comments:
        </h3>
        <PostComment allComments={allComments} setAllComments={setAllComments}/>
        {allComments.map((comment) => {
          return <SingleComment key={comment.comment_id} comment={comment} allComments={allComments} setAllComments={setAllComments}/>;
        })}
      </section>
    </>
  );
}
