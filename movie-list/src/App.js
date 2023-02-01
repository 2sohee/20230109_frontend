import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/movie-list/Header";
import Home from "./component/movie-list/Home";
import Movie from "./component/movie-list/Movie";
import Person from "./component/movie-list/Person";
import TV from "./component/movie-list/TV";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="tv" element={<TV />} />
        <Route path="person" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
