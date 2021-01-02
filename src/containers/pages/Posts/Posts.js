import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Post from "../../../components/Post/Post";
// import { Picker, Item, Text } from "@adobe/react-spectrum";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <Link to="/">Home</Link>
      <hr />
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
}

export default Posts;
