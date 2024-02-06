import { useEffect, useState } from "react";
import { getArticles } from "../../utils/getApi";
import ArticleItem from "./ArticleItem";

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    getArticles().then(({ articles }) => {
      setAllArticles(articles);
    });
  }, []);

  return (
    <section className="section-all-articles">
      <ul className="list-all-articles">
        {allArticles.map((article, index) => {
          return <ArticleItem article={article} key={article + index} />;
        })}
      </ul>
    </section>
  );
}
