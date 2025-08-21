import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import MovieDetails from "./Components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {

  const [movies, setMovies] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);

  // Get All Movies
  const getAllMovies = async () => {
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=986fe48ea074e0043dcaecde63df2164&language=ar'
    );
    setMovies(res.data.results)
    setPagesCount(res.data.total_pages);
  }

  // Get Page Movies
  const getCurrentPage = async (pageNumber) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=986fe48ea074e0043dcaecde63df2164&language=ar&page=${pageNumber}`
    );
    setMovies(res.data.results);
    setPagesCount(res.data.total_pages);
  }


  useEffect(() => {
    getAllMovies();
  }, [])

  // Search On Api 
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=986fe48ea074e0043dcaecde63df2164&language=ar&query=${word}`
      );
      setMovies(res.data.results);
      setPagesCount(res.data.total_pages);
    }
  }

  return (
    <div className="font color-body">
      <NavBar searchProp={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/"
              element={<MoviesList moviesProps={movies} currentPageProp={getCurrentPage} pagesCountProp={pagesCount} />}
            />
            <Route path="/movie/:id"
              element={<MovieDetails />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
