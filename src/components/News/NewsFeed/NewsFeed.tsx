import { Article } from "../../../constants";
import { formatDate } from "../../../utils/formatDate";
import "./NewsFeed.scss";
import { v4 as uuidv4 } from "uuid";

interface NewsFeedProps {
  articles: Article[],
  loading: boolean,
  error: string | null
}

export default function NewsFeed ({articles, loading, error} : NewsFeedProps) {
  if (loading)
    return <div className="NewsFeed">Loading...</div>
  
  if (error)
    return <div className="NewsFeed">Error...</div>

  return (
    <div className="NewsFeed">
      <ul className="NewsFeed__list">
        {articles.map((article) => (
          <li className="NewsFeed__article" key={uuidv4()}>
             {article.urlToImage && (
              <div className="NewsFeed__article-image-wrap">
                <img src={article.urlToImage} alt="`Image for ${article.title}`" className="NewsFeed__article-image" />
              </div>
            )}
            <div className="NewsFeed__article-info">
              <h2 className="NewsFeed__article-title">{article.title || article.webTitle || article.abstract}</h2>
              {article.publishedAt && (
                <p className="NewsFeed__article-date">{formatDate(article.publishedAt)}</p>
              )}
              {article.webPublicationDate && (
                <p className="NewsFeed__article-date">{formatDate(article.webPublicationDate)}</p>
              )}
              {article.pub_date && (
                <p className="NewsFeed__article-date">{formatDate(article.pub_date)}</p>
              )}
              {(article.description || article.lead_paragraph) && (<p className="NewsFeed__article-descr">{article.description || article.lead_paragraph}</p>)}
              {article?.author && (<p className="NewsFeed__article-author">By: {article.author}</p>)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}