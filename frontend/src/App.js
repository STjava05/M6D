import React from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./components/login";
import NavBar from "./components/navbar/BlogNavbar";
import Blog from "./views/blog/Blog";
import Home from "./views/home/Home";
import NewBlogPost from "./views/new/New";


function App() {
  const user = useSelector((state) => state.blog.token);

  return (
    <Router>    
      <NavBar />
      <Routes>
        <Route path="/" exact element={user && user.token ? <Home /> : <Login />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/new" element={<NewBlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
