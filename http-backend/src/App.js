import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

// https://swapi.py4e.com/documentation#films 참고

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // async function()=> 도 오류없이 ㅇㅇ
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // 스타워즈 : https://swapi.py4e.com/api/films
      const response = await fetch(
        "https://react-http-944a9-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong...!!");
      }

      // 돌려받은 응답 json으로 파싱
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  // AddMovie 컴포넌트에서 입력한 영화에 대한 객체데이터 갖고오기
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-944a9-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json", // 보통 API 요청을 보낼때 어떤 컨텐츠를 담아서 보내는지 표기해줌
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length == 0 && !error && <p>No movies...</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

/*
  function fetchMovieHandler() {
    // 브라우저가 사용할 수 있게 해준 함수
    // fetch API : 두번째 인자로 메소드 변경가능 기본적으로 get임
    fetch("https://swapi.py4e.com/api/films/")
      .then((response) => {
        //response 객체에 내장메소드가 있어서 body를 json형태로 자동변환해준다
        return response.json();
      })
      .then((data) => {
        // MovieList 컴포넌트에서 받는 props명으로 변환해주기
        const transformMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformMovies);
      });
  }


*/
