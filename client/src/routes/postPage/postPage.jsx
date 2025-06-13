import IKImage from '../../components/image/image';
import PostInteractions from '../../components/postInteractions/postInteractions';
import Comments from '../../components/comments/comments';
import './postPage.css';
import { Link } from 'react-router';

const PostPage = () => {
  return (
    <div className="postPage">
      <svg height="20" viewBox="0 0 24 24" width="20" style={{ cursor: 'pointer' }}>
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
      <div className="postContainer">
        <div className="postImage">
          <IKImage src="/pins/pin1.jpeg" w={400} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john" className="postUser">
            <IKImage src="/general/noAvatar.png" />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
