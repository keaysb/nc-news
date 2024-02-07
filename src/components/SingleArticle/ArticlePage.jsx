import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByArticleID } from "../../utils/getApi";
import articlePageStyles from "./articlePage.module.scss";
import IsLoading from "../isLoading/IsLoading";
import { formatDate } from "../../utils/formatDate";
import { ErrorHandler } from "../ErrorHandler/ErrorHandler";

export default function ArticlePage({ setCurrentTopic }) {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  useEffect(() => {
    setIsLoading(true);
    setCurrentTopic(null);
    getArticlesByArticleID(article_id).then(({ article }) => {
      setCurrentArticle(article);
      setCurrentTopic(article.topic);
    })
    .catch(err => {
      setIsLoading(false);
      setError({ err });
    });
    setIsLoading(false);
  }, [article_id]);
  return (
    <>
      {!error && <article
        id={`${articlePageStyles.article}`}
        className={`section is-large`}
      >
        <section>
          <h2
            id={articlePageStyles["title-responsive"]}
            className={`title is-2 has-text-centered`}
          >
            {currentArticle.title}
          </h2>
          <div className={`${articlePageStyles["article-section-info"]}`}>
            <figure className={`image is-centered ${articlePageStyles.img}`}>
              <img
                src={currentArticle.article_img_url}
                alt={currentArticle.title}
              />
            </figure>
            <div className={articlePageStyles["author-votes-div"]}>
              <p className={`subtitle is-5 ${articlePageStyles.text}`}>
                By: {currentArticle.author}
              </p>
              <p
                className={`subtitle is-5 ${articlePageStyles.votes} ${articlePageStyles.text}`}
              >
                Votes: {currentArticle.votes}
              </p>
            </div>
            <p>{formatDate(currentArticle.created_at)}</p>
          </div>
          <div className="content is-medium">
            <p>{currentArticle.body}</p>
          </div>
        </section>
      </article>}
      {isLoading && <IsLoading />}
      {error && <ErrorHandler error={error} />}
    </>
  );
}
