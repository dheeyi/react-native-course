import {useEffect, useState} from 'react';
import axios from 'axios';
import { TMDB_BASE_URL, TMDB_ACCESS_TOKEN } from '@env';

const useTMDB = (path: string) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/${path}`, {
        headers: {
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        params: {
          language: 'en-US',
          page: 1,
        },
      });
      setMovies(response.data.results);
    };
    getMovies();
  }, [path]);

  return [movies];
};

export default useTMDB;
