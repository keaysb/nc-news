import { useEffect, useState } from "react";
import { apiCall } from "../../utils/apiCall";
import ArticleItem from "./ArticleItem";
import articleStyles from "./articles.module.scss";
import  ErrorHandler  from "../ErrorHandler/ErrorHandler";
import IsLoading from "../IsLoading/IsLoading";

export default function AllArticles({ setCurrentTopic }) {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setCurrentTopic(null);
    setError(null)


    apiCall()
      .get("articles")
      .then(({ data: { articles } }) => {
        setAllArticles(articles);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ err });
      });
  }, []);

  return (
    <>
      {isLoading && <IsLoading />}
      {error && <ErrorHandler error={error} />}
      <section
        className={`${articleStyles["section-all-articles"]}`}
      >
        <div className="columns is-multiline is-centered">
          <ul
            className={`${articleStyles["list-all-articles"]}`}
          >
            {allArticles.map((article) => {
              return <ArticleItem article={article} key={article.article_id} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
