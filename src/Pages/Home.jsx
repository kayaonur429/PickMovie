import React, { useEffect, useState } from "react";
import CardMovie from "../Components/CardMovie/CardMovie";
import {Navbar,Container,Nav,Form,FormControl,Button,} from "react-bootstrap";


function Home() {
  const API_URL ="https://api.themoviedb.org/3/movie/popular?api_key=7471bde8a6ad22fcc35902729d0d32f0";

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar className="mynavbar" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">TMDB API</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              navbarScroll
            ></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>
              <Button className="searchbutton" variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <CardMovie key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>movie not found</h2>
        )}
      </div>
    </>
  );
}

export default Home;
