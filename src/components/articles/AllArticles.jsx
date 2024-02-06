import { useEffect, useState } from "react";
import { getArticles } from "../../utils/getApi";
import ArticleItem from "./ArticleItem";
import articleStyles from "./articles.module.scss";
import { ErrorHandler } from "../errorHandler/ErrorHandler";

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setAllArticles(articles);
      setIsLoading(false)
      setError(null);
    })
    .catch(err =>{
      setIsLoading(false)
      setError({ err });
    });
  }, []);


  return (
    <>
    <section className={`section-all-articles ${articleStyles["section-all-articles"]}`}>
      {isLoading && <progress class="progress is-small is-primary is-centered" max="100">50%</progress>}
      <div className="columns is-multiline is-centered">
      <ul className={`list-all-articles ${articleStyles["list-all-articles"]}`}>
        {allArticles.map((article, index) => {
          return <ArticleItem article={article} key={article.article_id} />;
        })}
      </ul>
      </div>
    </section>
    {error && <ErrorHandler error={error} />}
    </>
  );
}
