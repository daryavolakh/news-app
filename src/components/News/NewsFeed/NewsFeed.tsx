import { Article } from "../../../constants"

interface NewsFeedProps {
  articles: Article[],
  loading: boolean,
  error: string | null
}

export default function NewsFeed ({articles, loading, error} : NewsFeedProps) {
  if (loading)
    return <div>Loading...</div>
  
  if (error)
    return <div>Error...</div>

  return (
    <div>
      <h2>Your Personalized News Feed!</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.title + article.publishedAt}>
            <h3>{article.title}</h3>
            <p>{article?.description}</p>
            {article?.author && (<p>By: {article?.author}</p>)}
          </li>
        ))}
      </ul>
    </div>
  )
}