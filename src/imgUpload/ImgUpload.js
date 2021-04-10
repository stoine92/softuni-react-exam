import { useState } from "react";
import { storage, auth } from "../fire";
import "./img.css";

const ImgUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            var user = auth.currentUser;
            user
              .updateProfile({
                photoURL: url,
              })
              .then(function () {
                // Update successful.
                console.log(user);
              })
              .catch(function (error) {
                // An error happened.
                console.log(error);
              });
          });
      }
    );
  };

  return (
    <div className="containerImg">
      <div className="cont">
        <h1 className="h1Img">Image upload</h1>
        <br />
        <img className="avatar-preview" src={url || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} alt="firebase-image" />
        <br />
        <input type="file" className="imgSelector" onChange={handleChange} />
        <button className="button" onClick={handleUpload}>Upload</button>
        <progress value={progress} max="100" />
      </div>
    </div>
  );
};

export default ImgUpload;
