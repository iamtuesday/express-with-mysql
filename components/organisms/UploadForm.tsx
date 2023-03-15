import axios from "axios";
import { ChangeEvent, useState, useRef } from "react";

export const UploadForm = () => {
  const actualBtnRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const uploadToS3 = async (e: ChangeEvent<HTMLFormElement>) => {
    // const formData = new FormData(e.target);
    // const file = formData.get("file");

    //@ts-ignore
    let file = actualBtnRef.current.files[0];

    if (!file) {
      return null;
    }

    console.log(file);
    //@ts-ignore
    const fileType = encodeURIComponent(file.type);

    const { data } = await axios.get(`/api/media?fileType=${fileType}`);

    const { uploadUrl, key } = data;

    await axios.put(uploadUrl, file);

    return key;
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //@ts-ignore
    let files = actualBtnRef.current.files[0];
    console.log(files);
    setFileName(files.name);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await uploadToS3(e);
    // const key = await uploadToS3(e);

    // try {
    //   const data = await axios.post("/api/messages", {
    //     name: name,
    //     title: title,
    //     message: message,
    //     file: key,
    //   });
    //   console.log(data);
    // } catch (err: any) {
    //   throw new Error(err);
    // }
  };

  return (
    <div className="UploadForm">
      <form className="UploadForm-form" onSubmit={handleSubmit}>
        <div className="UploadForm-file">
          <input
            type="file"
            id="actual-btn"
            hidden
            ref={actualBtnRef}
            onChange={handleOnChange}
          />

          <div className="uploadBtn">
            <label htmlFor="actual-btn">
              <span className="icon-more"></span>
            </label>
            <span id="file-chosen">{fileName}</span>
          </div>
        </div>
        <div className="UploadForm-textField">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="UploadForm-textField">
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="UploadForm-textarea">
          <textarea
            placeholder="Message"
            name="textarea"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" className="UploadForm-submit" value="Send" />
      </form>
    </div>
  );
};
