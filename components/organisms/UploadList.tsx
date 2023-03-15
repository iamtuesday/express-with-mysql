import { FC, useState, useEffect } from "react";

const initialState = [
  {
    id: 0,
    name: "",
    title: "",
    message: "",
    file: "",
  },
];

export const UploadList = () => {
  const [data, setData] = useState(initialState);
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="UploadList">
      <ul className="UploadList-ul">
        <li className="UploadList-li">Name</li>
        <li className="UploadList-li">Subject</li>
        <li className="UploadList-li">Message</li>
        <li className="UploadList-li">File</li>
      </ul>
      <div className="UploadList-lists">
        {data.map((item, index) => {
          return (
            <ul key={index} className="UploadList-list">
              <li className="UploadList-item">{item.name}</li>
              <li className="UploadList-item">{item.title}</li>
              <li className="UploadList-item">{item.message}</li>
              <li className="UploadList-item">
                <a href={`https://incaneletric.s3.amazonaws.com/${item.file}`} className="UploadList-download">
                  Donwload
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
