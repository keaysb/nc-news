import { useEffect, useState } from "react";
import { getArticles } from "../../utils/getApi";
import ArticleItem from "./ArticleItem";
import "./articles.scss"

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getArticles().then(({ articles }) => {
      setAllArticles(articles);
      setIsLoading(false)
    })
    .catch(error =>{
      console.log(error)
    });
  }, []);

  return (
    <section className="section-all-articles">
      {isLoading && <p>Loading...</p>}
      <div className="columns is-multiline is-centered">
      <ul className="list-all-articles">
        {allArticles.map((article, index) => {
          return <ArticleItem article={article} key={article + index} />;
        })}
      </ul>
      </div>

    </section>
  );
}
