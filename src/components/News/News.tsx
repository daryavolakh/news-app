import { useEffect, useState } from "react";
import NewsFeed from "./NewsFeed/NewsFeed";
import NewsFeedSettings from "./NewsFeedSettings/NewsFeedSettings";
import { useDispatch, useSelector } from "react-redux"
import { fetchNewsFailure, fetchNewsStart, fetchNewsSuccess, setNewsCategory, selectNewsArticles, selectNewsCategory, selectNewsError, selectNewsLoading } from "../../app/reducers/newsSlice";
import { newsAPIUrl, guardianAPIUrl, timesAPIUrl } from "../../constants";

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
    const fetchData = async () => {
      dispatch(fetchNewsStart());

      try {
        let url = newsAPIUrl;
        if(category) {
          url += `&category=${category}`;
        }
        const response = await fetch(url);

        if(!response.ok) {
          throw new Error('Failed to fetch news.');
        }

        const data = await response.json();
        dispatch(fetchNewsSuccess(data.articles)); // data.articles, data.response.results, data.response.docs
      } catch (error: any) {
        dispatch(fetchNewsFailure(error.message)); 
      }
    };

    fetchData();
  }, [dispatch, category]);

  return (
    <>
      <NewsFeedSettings selectedCategory={category} setCategory={setCategory} />
      <NewsFeed articles={articles} loading={loading} error={error} />
    </>
  );
}