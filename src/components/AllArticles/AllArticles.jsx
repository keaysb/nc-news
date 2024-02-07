import { useEffect, useState } from "react";
import { getArticles } from "../../utils/getApi";
import ArticleItem from "./ArticleItem";
import articleStyles from "./articles.module.scss";
import { ErrorHandler } from "../ErrorHandler/ErrorHandler";
import IsLoading from "../isLoading/IsLoading";

export default function AllArticles({ setCurrentTopic }) {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setCurrentTopic(null);
    getArticles()
      .then(({ articles }) => {
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
      <section
        className={`section-all-articles ${articleStyles["section-all-articles"]}`}
      >
        <div className="columns is-multiline is-centered">
          <ul
            className={`list-all-articles ${articleStyles["list-all-articles"]}`}
          >
            {allArticles.map((article, index) => {
              return <ArticleItem article={article} key={article.article_id} />;
            })}
          </ul>
        </div>
        {isLoading && <IsLoading />}
      </section>
      {error && <ErrorHandler error={error} />}
    </>
  );
}