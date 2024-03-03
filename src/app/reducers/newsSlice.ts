import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Article } from "../../constants/index"

interface NewsState {
  loading: boolean,
  error: string | null,
  category: string,
  articles: Article[],
}

const initialState: NewsState = {
  loading: false,
  error: null,
  category: 'General',
  articles: []
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNewsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchNewsSuccess(state, action) {
      state.loading = false;
      state.articles = action.payload;
    },
    fetchNewsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setNewsCategory(state, action) {
      state.category = action.payload;
    }
  }
});

export const { fetchNewsStart, fetchNewsSuccess, fetchNewsFailure, setNewsCategory } = newsSlice.actions;
export default newsSlice.reducer;

export const selectNewsLoading = (state: RootState) => state.news.loading;
export const selectNewsError = (state: RootState) => state.news.error;
export const selectNewsArticles = (state: RootState) => state.news.articles;
export const selectNewsCategory = (state: RootState) => state.news.category;