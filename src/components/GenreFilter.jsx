import { useSearchParams } from "react-router-dom";

export default function GenreFilter({ genres }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeGenre = searchParams.get('genre') || '';

  function handleSelect(genreId) {
    setSearchParams(genreId ? { genre: genreId } : {});
  }

  return (
    <div className="genres">
      {genres.map((genre) => (
        <button
          key={genre.id || 'all'}
          type="button"
          className={'genre-btn' + (genre.id === activeGenre ? ' active' : '')}
          onClick={() => handleSelect(genre.id)}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
}
