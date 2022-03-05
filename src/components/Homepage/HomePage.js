import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Post from "../Post/Post";
import Nav from "../NavBar/Nav";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
    console.log(posts);
  };
  useEffect(() => {
    getPosts();
  });
  return (
    <main>
      <Nav label="Create Post" to="/createpost" />
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} lg={3}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default HomePage;
