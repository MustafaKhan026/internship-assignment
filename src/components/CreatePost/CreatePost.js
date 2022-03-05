import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Nav from "../NavBar/Nav";
import "./CreatePost.css";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title: postTitle,
      body: postBody,
      userId: 1,
    };

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
    } catch (err) {
      console.log(err);
    }
    window.location.replace("/");
  };

  return (
    <div className="form-wrapper">
      <Nav label="home" to="/" />
      <form className="form" onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center" }}>Create Post</h3>
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          style={{ width: "100%", marginBottom: "20px" }}
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
        <TextField
          id="standard-basic"
          label="Body"
          variant="standard"
          style={{ width: "100%", marginBottom: "20px" }}
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        />
        <Button variant="outlined" type="submit">
          Post
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
