import { useEffect } from "react";
import NewsFeed from "./NewsFeed/NewsFeed";
import NewsFeedSettings from "./NewsFeedSettings/NewsFeedSettings";
import { useDispatch, useSelector } from "react-redux"
import { fetchNewsFailure, fetchNewsStart, fetchNewsSuccess, setNewsCategory, selectNewsArticles, selectNewsCategory, selectNewsError, selectNewsLoading } from "../../app/reducers/newsSlice";
import { newsAPIUrl, guardianAPIUrl, timesAPIUrl } from "../../constants";
import './News.scss';
import { fetchData } from "../../utils/fetchData";

export default function News() {
  const dispatch = useDispatch();
  const 
    articles = useSelector(selectNewsArticles),
    category = useSelector(selectNewsCategory),
    loading = useSelector(selectNewsLoading),
    error = useSelector(selectNewsError);

    const setCategory = (category: string) => {
      dispatch(setNewsCategory(category));
    }

  useEffect(() => {
    const getArticles = async () => {
      dispatch(fetchNewsStart());

      try {
        let urlNewsAPI = newsAPIUrl,
        urlGuardianAPI = guardianAPIUrl,
        urlTimesAPI = timesAPIUrl;

        if(category) {
          urlNewsAPI += `&category=${category}`;
          urlGuardianAPI += `&section=${category}`;
          urlTimesAPI += `&q=${category}`;
        }

        const data = await fetchData(urlNewsAPI, urlGuardianAPI, urlTimesAPI);
        dispatch(fetchNewsSuccess(data));
      } catch (error: any) {
        dispatch(fetchNewsFailure(error.message)); 
      }
    };

    getArticles();
  }, [dispatch, category]);

  return (
    <div className="News">
      <h1 className="News__title">Personalized News Feed</h1>
      <NewsFeedSettings selectedCategory={category} setCategory={setCategory} />
      <NewsFeed articles={articles} loading={loading} error={error} />
    </div>
  );
}