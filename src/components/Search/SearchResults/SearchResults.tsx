import { Article } from "../../../constants";
import { formatDate } from "../../../utils/formatDate";
import "./SearchResults.scss";
import { v4 as uuidv4 } from "uuid";

interface SearchResultsProps {
  results: Article[],
}

export default function SearchResults ({ results } : SearchResultsProps) {
  return (
    <ul className="SearchResults">
      {results.length ? 
        results.map((result) => (
          <li className="SearchResults__article" key={uuidv4()}>
            {result.urlToImage && (
              <div className="SearchResults__article-image-wrap">
                <img src={result.urlToImage} alt={`Image for ${result.title}`} className="SearchResults__article-image" />
              </div>
            )}
            <div className="SearchResults__article-info">
              <h2 className="SearchResults__article-title">{result.title || result.webTitle || result.abstract}</h2>
              {result.publishedAt && (<p className="SearchResults__article-date">{formatDate(result.publishedAt)}</p>)}
              {result.webPublicationDate && (
                <p className="SearchResults__article-date">{formatDate(result.webPublicationDate)}</p>
              )}
              {result.pub_date && (
                <p className="SearchResults__article-date">{formatDate(result.pub_date)}</p>
              )}
              {(result.description || result.lead_paragraph) && (<p className="SearchResults__article-descr">{result.description || result.lead_paragraph}</p>)}
              {result?.author && (<p className="NewsFeed__article-author">By: {result.author}</p>)}
            </div>
          </li>
        ))
        : (<p>No Articles Found :(</p>)
      }
    </ul>
  );
}