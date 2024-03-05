export async function fetchData(urlNewsAPI: string, urlGuardianAPI: string, urlTimesAPI: string) {
  const [/*responseNewsAPI,*/ responseGuardianAPI, responseTimesAPI] = await Promise.all([
    //fetch(urlNewsAPI),
    fetch(urlGuardianAPI),
    fetch(urlTimesAPI)
  ]);

  if(/*!responseNewsAPI.ok ||*/ !responseGuardianAPI.ok || !responseTimesAPI.ok) {
    throw new Error('Failed to fetch news.');
  }

  const [/*dataNews,*/ dataGuardian, dataTimes] = await Promise.all([
    //responseNewsAPI.json(),
    responseGuardianAPI.json(),
    responseTimesAPI.json()
  ]);

  // the API didn't provide any way to exclude [Removed] articles, that's why we need to filter
  //const cleanArticles = dataNews.articles.filter((item: Article) => item?.title !== "[Removed]");

  return [
    //...cleanArticles,
    ...dataGuardian.response.results,
    ...dataTimes.response.docs
  ]
}