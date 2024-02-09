import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCall } from "../../utils/apiCall";
import articlePageStyles from "./articlePage.module.scss";
import IsLoading from "../IsLoading/IsLoading";
import { formatDate } from "../../utils/formatDate";
import  ErrorHandler  from "../ErrorHandler/ErrorHandler";
import AllComments from "./Comments/AllComments";
import ArticleVotes from "./ArticleVotes/ArticleVotes";

export default function ArticlePage({ setCurrentTopic, setStopScroll }) {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setCurrentTopic(null);

    apiCall()
      .get(`articles/${article_id}`)
      .then(({ data: { article } }) => {
        setCurrentArticle(article);
        setCurrentTopic(article.topic);
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
      {(!isLoading && !error) && (
        <>
          <article
            id={`${articlePageStyles.article}`}
            className={`section is-large`}
          >
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

                <div
                  className={`${articlePageStyles.votes} ${articlePageStyles.text}`}
                >
                  <ArticleVotes article_id={article_id} currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} setStopScroll={setStopScroll}/>
                </div>
              </div>
              <p>{formatDate(currentArticle.created_at)}</p>
            </div>
            <div
              id={articlePageStyles["article-body"]}
              className={`content is-medium`}
            >
              <p>{currentArticle.body}</p>
            </div>
          </article>
          <AllComments article_id={article_id} />
        </>
      )}
    </>
  );
}
