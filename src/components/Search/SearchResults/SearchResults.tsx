import { Article } from "../../../constants";

interface SearchResultsProps {
  results: Article[],
}

export default function SearchResults ({ results } : SearchResultsProps) {
  return (
    <>
      {results.length ? 
        results.map((result) => (
          <div key={result.title + result.author}>
            <h2>{result.title}</h2>
            <p>{result?.publishedAt}</p>
            <p>{result?.description}</p>
          </div>
        ))
        : (<div>No Articles Found</div>)
      }
    </>
  );
}