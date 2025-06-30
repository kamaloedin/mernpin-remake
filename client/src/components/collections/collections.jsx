import IKImage from '../image/image';
import './collections.css';

const Collections = () => {
  return (
    <div className="collections">
      <div className="collection">
        <IKImage src="/pins/pin1.jpeg" w={500} />
        <div className="collectionInfo">
          <h1>Minimalist Bedroom</h1>
          <span>12 pins · 1w</span>
        </div>
      </div>
      <div className="collection">
        <IKImage src="/pins/pin1.jpeg" w={500} />
        <div className="collectionInfo">
          <h1>Minimalist Bedroom</h1>
          <span>12 pins · 1w</span>
        </div>
      </div>
      <div className="collection">
        <IKImage src="/pins/pin1.jpeg" w={500} />
        <div className="collectionInfo">
          <h1>Minimalist Bedroom</h1>
          <span>12 pins · 1w</span>
        </div>
      </div>
    </div>
  );
};

export default Collections;
