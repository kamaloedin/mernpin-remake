import IKImage from '../image/image';
import './postInteractions.css';

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <IKImage src="/general/react.svg" />
        273
        <IKImage src="/general/share.svg" />
        <IKImage src="/general/more.svg" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteractions;
