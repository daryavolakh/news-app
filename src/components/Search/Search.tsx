import { useEffect, useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import { Article, Filters, FormDate, newsAPIUrl } from "../../constants";
import SearchResults from "./SearchResults/SearchResults";
import FilterForm from "./FilterForm/FilterForm";

const initialFilters: Filters = {
  category: '',
  date: {
    from: '',
    to: ''
  }
}

export default function Search() {
  const [keyword, setKeyword] = useState<string>('');
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        let url = newsAPIUrl;

        if(keyword) {
          url += `&q=${keyword}`;
        }

        if(filters.category) {
          url += `&category=${filters.category}`;
        }

        if(filters.date.from) {
          url += `&from=${filters.date.from}`;
        }

        if(filters.date.to) {
          url += `&to=${filters.date.to}`;
        }

        const response = await fetch(url);

        if(!response.ok) {
          throw new Error('Failed to fetch sorted news');
        }

        const data = await response.json();
        setSearchResults(data.articles);
      } catch (error: any) {
        console.error(error.message);
      }
    }
    handleSearch();
  }, [keyword, filters]);

  return (
    <>
      <h1>It's Search</h1>
      <SearchForm setKeyword={setKeyword} />
      <FilterForm filters={filters} setFilters={setFilters} />
      <SearchResults results={searchResults} />
    </>
  );
}