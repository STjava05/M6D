import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import BlogItem from "../blog-item/BlogItem";
import { useSelector,useDispatch } from "react-redux";
import { fetchApi } from "../../../reducers/apiSlice";



const BlogList = props => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.data);


  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);


  return (
   
    <Row>
  
     
      {posts&&posts.map((post, i) => (
        <Col
          key={`item-${i}`}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
         
        </Col>
        
      ))}
       
    </Row>
  );
};

export default BlogList;
