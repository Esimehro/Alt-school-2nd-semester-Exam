import React from 'react';

const InputForm = ({ value, setValue }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mb-4 mt-4 w-2/6" onSubmit={handleSearch}>
      <label htmlFor="search" className="sr-only">
        Search Repositories
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Find a repository..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-grey-200 rounded-md w-[75%] md:w-[65%] px-2 py-1 text-zinc-700 outline-none"
      />
      <button
        type="submit"
        className="bg-dark-yellow text-neutral-50 ml-3 px-2 py-1 rounded-md text-sm md:text-lg"
      >
        Search
      </button>
    </form>
  );
};

export default InputForm;