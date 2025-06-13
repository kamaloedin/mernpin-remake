import './comments.css';
import IKImage from '../../components/image/image';

const Comments = () => {
  return (
    <div className="comments">
      <span className="commentsCount">3 Comments</span>
      <div className="commentsList">
        <div className="comment">
          <IKImage src="/general/noAvatar.png" />
          <div className="commentContent">
            <span className="commentUsername">Jane Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo ipsa,
              blanditiis fugiat vero omnis.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <IKImage src="/general/noAvatar.png" />
          <div className="commentContent">
            <span className="commentUsername">Jane Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo ipsa,
              blanditiis fugiat vero omnis.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <IKImage src="/general/noAvatar.png" />
          <div className="commentContent">
            <span className="commentUsername">Jane Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo ipsa,
              blanditiis fugiat vero omnis.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div>😀</div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
