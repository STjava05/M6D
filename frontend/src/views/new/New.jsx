import React, { useCallback, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import { postPost } from "../../reducers/apiSlice";
import { useDispatch } from "react-redux";



const NewBlogPost = props => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const Category=useRef(null);
  const [Author, setAuthor] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const dispatch = useDispatch();


  const handleChange = useCallback(value => {
    setText(value);
  });
  const postPayload = {
    title: Title,
    email: Email,
    password: Password,
    category: Category,
    author: { name: Author, avatar: "https://images.unsplash.com/photo-1675747158920-1b00990de2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    content: text,
    cover: image,

  };

  return (
    <Container className="new-blog-container">
      <Form className="mt-5">

        <Form.Group controlId="formImage">
          <Form.Label>Cover</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Titolo</Form.Label>
          <Form.Control size="lg" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />

        </Form.Group>

        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>email</Form.Label>
          <Form.Control size="lg" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>password</Form.Label>
          <Form.Control size="lg" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Author</Form.Label>
          <Form.Control size="lg" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />

        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control size="lg" as="select" ref={Category} >
            <option>Social</option>
            <option>Vacanze</option>
            <option>Archittecture</option>
            <option>Natura</option>
            <option>Benessere</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Contenuto Blog</Form.Label>
          <ReactQuill value={text} onChange={handleChange} className="new-blog-content" />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
            onClick={(e) => {
              e.preventDefault();
              dispatch(postPost(postPayload));

            }}
          >

            Invia
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
