import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";
import HomePage from "./components/Homepage/HomePage";
import Post from "./components/SinglePost/Post";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
