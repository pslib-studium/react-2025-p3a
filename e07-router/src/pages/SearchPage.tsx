import { type FC } from "react";
import { useParams } from "react-router-dom";

type SearchRouteParams = {
  query?: string;
};

export const SearchPage: FC = () => {
  const { query } = useParams<SearchRouteParams>();

  return (
    <div>
      <h1>Search</h1>
      {query ? (
        <p>Hledám: <strong>{query}</strong></p>
      ) : (
        <p>Nebyl zadán žádný dotaz. Přidejte třeba <code>/search/witcher</code>.</p>
      )}
    </div>
  );
};

export default SearchPage;