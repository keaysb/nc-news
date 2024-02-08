import { formatDate } from "../../../utils/formatDate";
import commentStyles from "./comments.module.scss"

export default function SingleComment({ comment }) {
  return (
    <>
      <section className={`media`}>
        <div className="media-content">
          <div className="content">
            <p>
              <b>{comment.author}</b>{" "}
              <small>
                <time dateTime={comment.created_at}>
                  {formatDate(comment.created_at)}
                </time>
              </small>
            </p>
            <p id={commentStyles["comment-body"]}>{comment.body}</p>
            <div className={`${commentStyles.votes}`}>
            <ion-icon name="heart-circle-outline" size=""></ion-icon>
              <span><small>{comment.votes}</small></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
