import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";
import { formatDate } from "../../utils/formatDate";
import articleStyles from "./articles.module.scss";

export default function ArticleItem({ article }) {
  return (

    <div className="column is-one-fourth-widescreen is-one-third-desktop is-half-tablet is-full-mobile">

    <li className="article-item">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={article.article_img_url} alt={`${article.title}`} />
            </figure>
          </div>
          <div className="card-content">
            <p className="subtitle is-6">
              {capitaliseFirstLetter(article.topic)}
            </p>
            <h3 className={`title is-3`}>{article.title}</h3>
            <p>{`By: ${article.author}`}</p>
            <time>{formatDate(article.created_at)}</time>
          </div>
        </div>
    </li>
      </div>
  );
}
