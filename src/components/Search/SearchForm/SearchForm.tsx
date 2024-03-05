import "./SearchForm.scss";

interface SearchFormProps {
  setKeyword: (keyword: string) => void
}

export default function SearchForm ({ setKeyword } : SearchFormProps) {

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as typeof e.target & {
      keyword: {
        value: string
      }
    };

    setKeyword(form.keyword.value);
  }

  return (
    <form onSubmit={handleSearch} className="SearchForm">
      <fieldset className="SearchForm__fieldset">
        <legend>Search</legend>
        <div className="SearchForm__input-block">
          <input 
            type="text" 
            id="keyword"
            placeholder="Enter keyword"
            className="SearchForm__input" />
        </div>
        <button type="submit" className="SearchForm__button">Search</button>
      </fieldset>
    </form>
  )
}