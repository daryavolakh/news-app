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
    <form onSubmit={handleSearch}>
      <fieldset>
        <legend>Search form!</legend>
        <div>
          <input type="text" id="keyword" placeholder="Enter keyword" />
        </div>
        <button type="submit">Search</button>
      </fieldset>
    </form>
  )
}