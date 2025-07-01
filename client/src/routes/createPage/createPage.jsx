import './createPage.css';
import IKImage from '../../components/image/image';

const CreatePage = () => {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <IKImage src="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            We recommend using high quality .jpg files less than 20 MB or .mp4 files less than 200
            MB.
          </div>
        </div>
        <div className="createForm">
          <div className="mainForm">
            <div className="createFormItem">
              <label htmlFor="title">Title</label>
              <input type="text" placeholder="Add a title" name="title" id="title" />
            </div>
            <div className="createFormItem">
              <label htmlFor="description">Description</label>
              <textarea
                rows={4}
                type="text"
                placeholder="Add a description"
                name="description"
                id="description"
              />
            </div>
          </div>
          <div className="subForm">
            <div className="createFormItem">
              <label htmlFor="link">Link</label>
              <input type="text" placeholder="Add a link" name="link" id="link" />
            </div>
            <div className="createFormItem">
              <label htmlFor="board">Board</label>
              <select name="board" id="board">
                <option>Choose a board: </option>
                <option>Board 1</option>
                <option>Board 2</option>
                <option>Board 3</option>
              </select>
            </div>
            <div className="createFormItem">
              <label htmlFor="tags">Tags</label>
              <input type="text" placeholder="Add a tags" name="tags" id="tags" />
              <small>Don&apos;t worry, people won&apos;t see your tags</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
