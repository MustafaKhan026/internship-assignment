import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";
import "./Post.css";
import Nav from "../NavBar/Nav";

const Post = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const getPost = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${path}`
    );
    setPost(res.data);
    // console.log(post);
  };
  const getComments = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${path}/comments`
    );
    setComments(res.data);
    console.log(comments);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      postId: path,
      body: comment,
      name: "john doe",
      email: "johnDoe@gmail.com",
    };
    try {
      await axios.post(
        `https://jsonplaceholder.typicode.com/posts/${path}/comments`,
        newComment
      );
    } catch (err) {
      console.log("ooopsie");
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
    getComments();
  });

  return (
    <div className="wrapper">
      <Nav label="Home" to="/" />
      <div className="card-box">
        <div className="card-content">
          <Typography variant="h4">{post.title}</Typography>
          <p>{post.body}</p>
        </div>
      </div>
      <div className="comments-box">
        <h5>Comments:</h5>
        <ul>
          {comments.map((comment) => (
            <li>{comment.body}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Write Your Comment"
            variant="standard"
            style={{ width: "100%", marginBottom: "20px" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button variant="outlined">Post Comment</Button>
        </form>
      </div>
    </div>
  );
};

export default Post;
