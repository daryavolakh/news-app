import { useEffect, useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import { Article, Filters, newsAPIUrl, timesAPIUrl, guardianAPIUrl } from "../../constants";
import SearchResults from "./SearchResults/SearchResults";
import FilterForm from "./FilterForm/FilterForm";
import "./Search.scss";
import { fetchData } from "../../utils/fetchData";

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
        let urlNewsAPI = newsAPIUrl,
        urlGuardianAPI = guardianAPIUrl,
        urlTimesAPI = timesAPIUrl;

        if(keyword) {
          urlNewsAPI += `&q=${keyword}`;
          urlGuardianAPI += `&q=${keyword}`;
          urlTimesAPI += `&q=${keyword}`;
        }

        if(filters.category) {
          urlNewsAPI += `&category=${filters.category}`;
          urlGuardianAPI += `&section=${filters.category}`;
          urlTimesAPI += `&q=${filters.category}`;
        }

        if(filters.date.from) {
          urlNewsAPI += `&from=${filters.date.from}`;
          urlGuardianAPI += `&from-date=${filters.date.from}`;

          const formattedTimesDateFrom = filters.date.from.replace(/-/g, '');
          urlTimesAPI += `&begin-date=${formattedTimesDateFrom}`;
        }

        if(filters.date.to) {
          urlNewsAPI += `&to=${filters.date.to}`;
          urlGuardianAPI += `&to-date=${filters.date.to}`;

          const formattedTimesDateTo = filters.date.to.replace(/-/g, '');
          urlTimesAPI += `&end-date=${formattedTimesDateTo}`;
        }

        const data = await fetchData(urlNewsAPI, urlGuardianAPI, urlTimesAPI);
        setSearchResults(data);
      } catch (error: any) {
        console.error(error.message);
      }
    }

    handleSearch();

    console.log(filters.date);
  }, [keyword, filters]);

  return (
    <div className="Search">
      <h1 className="Search__title">Search & Filter</h1>
      <div className="Search__panel">
        <SearchForm setKeyword={setKeyword} />
        <FilterForm filters={filters} setFilters={setFilters} />
      </div>
      <SearchResults results={searchResults} />
    </div>
  );
}