import { FormEvent } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
    const searchInput = formElements.namedItem("search") as HTMLInputElement;

    if (searchInput) {
      const searchValue = searchInput.value;
      if(!searchValue) return;
      setSearchTerm(searchValue)
    }
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="cat"
          name="search"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
