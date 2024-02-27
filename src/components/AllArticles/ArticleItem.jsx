import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";
import { formatDate } from "../../utils/formatDate";
import { Link } from "react-router-dom";
import articleStyles from "./articles.module.scss";

export default function ArticleItem({ article }) {
  return (
    <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
      <Link to={`/articles/${article.article_id}`}>
        <li className={`article-item ${articleStyles["article-item"]}`}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={article.article_img_url} alt={`${article.title}`} />
              </figure>
            </div>
            <div className="card-content">
              <p className={`subtitle is-6 ${articleStyles["subtitle"]}`}>
                {capitaliseFirstLetter(article.topic)}
              </p>
              <h2 className={`title is-5 ${articleStyles["title"]}`}>
                {article.title}
              </h2>
              <p className={articleStyles["subtitle"]}>{`By: ${article.author}`}</p>
              <time className={articleStyles["time"]}>{formatDate(article.created_at)}</time>
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
}
