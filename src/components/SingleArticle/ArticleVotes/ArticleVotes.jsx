import articleVotesStyles from "./articleVotes.module.scss";
import { useState } from "react";
import { apiCall } from "../../../utils/apiCall";
import ErrorHandlerSub from "../../ErrorHandler/ErrorHandlerSub";

export default function ArticleVotes({
  article_id,
  currentArticle,
  setCurrentArticle,
  setStopScroll,
}) {
  const [isLiked, setIsLiked] = useState(0);
  const [isDisliked, setIsDisliked] = useState(0);

  const [error, setError] = useState(null);

  const handleSubmitLike = (event) => {
    event.preventDefault();
    setError(null);
    setIsLiked(isLiked + 1);
    if (isLiked % 2 === 0 && isDisliked % 2 === 0) {
      setCurrentArticle({ ...currentArticle, votes: currentArticle.votes + 1 });
      setIsDisliked(0);
      apiCall()
        .patch(`articles/${article_id}`, {
          inc_votes: 1,
        })
        .then(() => {})
        .catch((err) => {
          setCurrentArticle({
            ...currentArticle,
          });
          setIsLiked(0);
          setError({ err });
        });
    } else if (isDisliked % 2 === 1) {
      setCurrentArticle({ ...currentArticle, votes: currentArticle.votes + 2 });
      setIsDisliked(0);

      apiCall()
        .patch(`articles/${article_id}`, {
          inc_votes: 2,
        })
        .then(() => {})
        .catch((err) => {
          setCurrentArticle({
            ...currentArticle,
          });
          setIsLiked(0);
          setError({ err });
        });
    } else {
      setCurrentArticle({ ...currentArticle, votes: currentArticle.votes - 1 });
      setIsDisliked(0);

      apiCall()
        .patch(`articles/${article_id}`, {
          inc_votes: -1,
        })
        .then(() => {})
        .catch((err) => {
          setCurrentArticle({
            ...currentArticle,
          });
          setIsLiked(0);
          setError({ err });
        });
    }
  };

  const handleSubmitDislike = (event) => {
    event.preventDefault();
    setError(null);
    setIsDisliked(isDisliked + 1);

    if (isDisliked % 2 === 0 && isLiked % 2 === 0) {
      setCurrentArticle({ ...currentArticle, votes: currentArticle.votes - 1 });
      setIsLiked(0);
      apiCall()
        .patch(`articles/${article_id}`, {
          inc_votes: -1,
        })
        .then(() => {})
        .catch((err) => {
          setCurrentArticle({
            ...currentArticle,
          });
          setIsDisliked(0);
          setError({ err });
        });
    } else if (isLiked % 2 === 1) {
      setCurrentArticle({ ...currentArticle, votes: currentArticle.votes - 2 });
      setIsLiked(0);
      apiCall()
        .patch(`articles/${article_id}`, {
          inc_votes: -2,
        })
        .then(() => {})
        .catch((err) => {
          setCurrentArticle({
            ...currentArticle,
          });
          setIsDisliked(0);
          setError({ err });
        });
    } else {
      setCurrentArticle({ ...currentArticle, votes: currentArticle.votes + 1 });
      setIsLiked(0);
      apiCall()
        .patch(`articles/${article_id}`, {
          inc_votes: 1,
        })
        .then(() => {})
        .catch((err) => {
          setCurrentArticle({
            ...currentArticle,
          });
          setIsDisliked(0);
          setError({ err });
        });
    }
  };
  return (
    <>
      {error && <ErrorHandlerSub error={error} setStopScroll={setStopScroll} />}
      <p id={articleVotesStyles["center-para"]} className={`subtitle is-5`}>
        {currentArticle.votes}
      </p>

      <form onSubmit={handleSubmitLike}>
        <button className={articleVotesStyles.button} type="submit">
          {isDisliked % 2 === 1 || isLiked % 2 === 0 ? (
            <>
              <div className={articleVotesStyles["outline-heart"]}>
                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </div>
            </>
          ) : isDisliked % 2 === 0 && isLiked % 2 === 1 ? (
            <>
              <div className={articleVotesStyles["heart"]}>
                <ion-icon name="heart" aria-hidden="true"></ion-icon>
              </div>
            </>
          ) : null}
        </button>
      </form>

      <form onSubmit={handleSubmitDislike}>
        <button className={articleVotesStyles.button} type="submit">
          {isDisliked % 2 === 0 || isLiked % 2 === 1 ? (
            <>
              <div className={articleVotesStyles["white-dislike"]}>
                <ion-icon
                  name="thumbs-down-sharp"
                  aria-hidden="true"
                ></ion-icon>
              </div>
            </>
          ) : isDisliked % 2 === 1 && isLiked % 2 === 0 ? (
            <>
              <div className={articleVotesStyles["black-dislike"]}>
                <ion-icon
                  name="thumbs-down-sharp"
                  aria-hidden="true"
                ></ion-icon>
              </div>
            </>
          ) : null}
        </button>
      </form>
    </>
  );
}
