import React, { useEffect, useMemo, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const Upload = () => {
  const [files, setFiles] = useState<Array<File>>([]);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone();

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const uploadToS3 = async () => {
    const file = files[0];
    const fileType = encodeURIComponent(file.type);

    const { data } = await axios.get(`/api/media?fileType=${fileType}`);
    const { uploadUrl, key } = data;
    await axios.put(uploadUrl, file);
    return key;
  };

  const onDrop = async (files: any) => {
    setFiles(files);
  };

  const uploadFile = async () => {
    await uploadToS3();
  };

  const Files = files.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="min-h-screen Dropzone">
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="Dropzone-Container my-[2%]">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              {/* <p>Drag and drop some files here, or click to select files</p> */}
              <p>Drag and drop File here, or click to select file</p>
            </div>
            <aside className="Dropzone-Files my-[2%] mx-[5%]">
              <h2 className="Dropzone-h2 font-dmsans font-semibold">Files</h2>
              <ul className="Dropzone-ul">{Files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
      <button onClick={uploadFile} className="btn-default mx-auto block">
        Upload
      </button>
    </div>
  );
};

export default Upload;
