
import { CATEGORIES } from "../../../constants";

interface NewsFeedSettingsProps {
  selectedCategory: string,
  setCategory: (author: string) => void
}

export default function NewsFeedSettings ({ selectedCategory, setCategory } : NewsFeedSettingsProps) {
  const handleAuthorChange = (e : any) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  }

  return (
    <>
      <h2>NewsFeedSettings</h2>
      <h3>Filters by</h3>
      <label>Category: </label>
      <select value={selectedCategory} onChange={handleAuthorChange}>
        {Object.values(CATEGORIES).map((category) => (
          <option key={category}>
            {category}
          </option>
        ))}
      </select>
     </>
  )
}