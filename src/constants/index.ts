export const newsAPIUrl = 
  'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=96bf87af43d7461486a8b93439343659';

export const guardianAPIUrl = 
'https://content.guardianapis.com/search' + 
'?api-key=28b78e5a-c66e-4092-9081-a55e8d56c418';

export const timesAPIUrl = 
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?' +
  '&api-key=rBW1zsAS5zqrLF6wpry1WHefkdqplE7u';

export interface Article {
  title?: string,
  webTitle?: string,
  abstract?: string,
  publishedAt?: string,
  webPublicationDate?: string,
  pub_date?: string,
  description?: string,
  lead_paragraph?: string,
  author?: string,
  urlToImage?: string,
}

export interface FormDate {
  from: string,
  to: string
}

export interface Filters {
  category: string,
  date: FormDate,
}

export enum CATEGORIES {
  general= 'General',
  business = 'Business',
  entertainment = 'Entertainment',
  health = 'Health',
  science = 'Science',
  sports = 'Sports',
  technology = 'Technology',
  world = "World news",
  politics = "Politics"
};