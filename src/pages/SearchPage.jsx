import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard.jsx';
import { movies } from '../data/movies.js';

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = (searchParams.get('q') || '').trim();

  const results = query
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className="page-shell">
      <span className="eyebrow">SEARCH</span>

      <h1 className="page-title">Поиск фильмов</h1>

      <p className="page-description">
        {query
          ? `Результаты поиска: ${query}`
          : 'Введите название фильма для поиска'}
      </p>

      <div className="movie-grid">
        {results.length > 0 ? (
          results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="empty-note">
            {query
              ? 'Ничего не найдено'
              : 'Начните вводить название фильма'}
          </div>
        )}
      </div>
    </section>
  );
}