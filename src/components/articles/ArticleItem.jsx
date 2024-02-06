import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";

export default function ArticleItem({ article }) {
  const date = new Date(article.created_at);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dateFormat = new Intl.DateTimeFormat("en-GB", options).format(date);

  return (
    <li className="article-item">
      {console.log(article)}
      <div className="article-text">
      <h3>{article.title}</h3>
      <p>{capitaliseFirstLetter(article.topic)}</p>
      <p>{`By: ${article.author}`}</p>
      <p>{dateFormat}</p>
      </div>
      <div className="article-image">
      <img src={article.article_img_url} alt={`${article.title}`} />
      </div>
    </li>
  );
}
