import { Filters, CATEGORIES } from "../../../constants";
import { formatDate } from "../../../utils/formatDate";
import "./FilterForm.scss";

interface FilterFormProps {
  filters: Filters,
  setFilters: (filters: Filters) => void
}

export default function FilterForm ({ filters, setFilters } : FilterFormProps) {
  const handleCategoryChange = (value: string) => {
    setFilters({
      ...filters,
      category: value
    });
  }

  const handleDateChange = (field: string, value: string) => {
    setFilters({
      ...filters,
      date: {
        ...filters.date,
        [field]: value ? formatDate(value) : ''
      }
    });
  }

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setFilters({
      category: '',
      date: {
        from: '',
        to: ''
      }
    });
  }

  const isClearDisabled = !filters.category && !filters.date.from && !filters.date.to;

  return (
    <form className="FilterForm">
      <fieldset className="FilterForm__fieldset">
        <legend className="FilterForm__legend">Filter by</legend>
        <div className="FilterForm__input-block">
          <label className="FilterForm__label">Category</label>
          <select 
            name="category"
            id="category"
            className="FilterForm__select"
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}>
            {Object.values(CATEGORIES).map(
              (category) => (<option key={category}>{category}</option>)
            )}
          </select>
        </div>
        <div className="FilterForm__date">
          <div className="FilterForm__input-block">
            <label className="FilterForm__label">From</label>
            <input 
              type="date"
              value={filters.date.from}
              className="FilterForm__input"
              onChange={(e) => handleDateChange("from", e.target.value)}
            />
          </div>
          <div className="FilterForm__input-block">
            <label className="FilterForm__label">To</label>
            <input 
              type="date"
              value={filters.date.to}
              className="FilterForm__input"
              onChange={(e) => handleDateChange("to", e.target.value)}
            />
          </div>
          <p className="FilterForm__note">*Articles are only available for the last month from the current date.</p>
        </div>
        <button
        type="button"
        className="FilterForm__clear"
        onClick={handleClear}
        disabled={isClearDisabled}>Clear all</button>
      </fieldset>
    </form>
  )
}