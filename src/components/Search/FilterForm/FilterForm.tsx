import { useEffect } from "react";
import { Filters, CATEGORIES } from "../../../constants";

interface FilterFormProps {
  filters: Filters,
  setFilters: (filters: Filters) => void
}

export default function FilterForm ({ filters, setFilters } : FilterFormProps) {
  const formatDate = (value: string) => {
    const selectedDate = new Date(value);
    return selectedDate.toISOString();
  }

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
        [field]: formatDate(value)
      }
    });
  }

  return (
    <form>
      <fieldset>
        <legend>Filter: </legend>
        <div>
          <label>Category</label>
          <select 
            name="category"
            id="category"
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}>
            {Object.values(CATEGORIES).map(
              (category) => (<option key={category}>{category}</option>)
            )}
          </select>
        </div>
        <div>
          <label>From</label>
          <input 
            type="date"
            onChange={(e) => handleDateChange("from", e.target.value)}
          />
        </div>
        <div>
          <label>To</label>
          <input 
            type="date"
            onChange={(e) => handleDateChange("to", e.target.value)}
          />
        </div>
        <p>*Articles only available from 2024-02-01</p>
      </fieldset>
    </form>
  )
}