import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pagin from "./components/Pagin";
import Posts from "./components/Posts";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  const indexOfLastPost = currentpage * postperpage;
  const indexOffirstPost = indexOfLastPost - postperpage;

  const currentPosts = posts.slice(indexOffirstPost, indexOfLastPost);

 //change page 

 const Ppagin=(pageNumber)=>{
   setCurrentpage(pageNumber);

 }

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">my appp</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagin postperpage={postperpage} totalPosts={posts.length}  Ppagin={Ppagin}/>
    </div>
  );
};

export default App;
