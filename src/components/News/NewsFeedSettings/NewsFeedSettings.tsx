
import { CATEGORIES } from "../../../constants";
import './NewsFeedSettigs.scss';

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
    <form className="NewsFeedSettings">
      <fieldset className="NewsFeedSettings__fieldset">
        <legend className="NewsFeedSettings__title">Prefferable settings</legend>
        <div className="NewsFeedSettings__input-block">
          <label className="NewsFeedSettings__label">Category</label>
          <select
            className="NewsFeedSettings__select"
            value={selectedCategory}
            onChange={handleAuthorChange}>
            {Object.entries(CATEGORIES).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </form>
  )
}