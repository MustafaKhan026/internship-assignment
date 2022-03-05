import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = ({ post }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        { post }
      );
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card style={{ height: "300px" }}>
      <CardContent>
        <div>
          <Link
            to={`/post/${post.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Typography variant="h5" gutterBottom>
              {post.title}
            </Typography>
          </Link>
          <Typography variant="subtitle1" gutterBottom>
            {post.body}
          </Typography>
        </div>
        <div style={{ width: "100%", height: "50px" }}>
          <DeleteIcon
            style={{ float: "right", marginRight: "20px", cursor: "pointer" }}
            onClick={handleDelete}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
