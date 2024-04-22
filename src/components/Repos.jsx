import React, { useEffect, useState } from "react";
import axios from "axios";
import RepoForm from "./RepoForm";
import InputForm from "./InputForm";
import NewRepo from "./NewRepo";
import Links from "./Links";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const perPage = 3;
  const username = "Esimehro";

  useEffect (() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [username]);

  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(1); 
  };

  const handleDelete = (id) => {
    const updatedRepos = repos.filter((repo) => repo.id !== id);
    setRepos(updatedRepos);
  };

  const handleAddRepo = (repoName) => {
    const newRepo = {
      id: Date.now(), 
      name: repoName
    };
    setRepos([newRepo, ...repos]);
  };

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = filteredRepos.length;
  const start = (page - 1) * perPage;
  const end = page * perPage;
  const pageLength = Math.ceil(total / perPage);

  return (
    <main className="md:col-span-2">
    <div className="sticky top-0 z-10 bg-white w-full shadow-sm">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Repositories
        </h1>

        <InputForm value={search} setValue={handleSearchChange} />

        <Links />
      </div>
    </div>
    <div className="flex w-full">
    <div className="w-2/6 p-4 ">
      <button  onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-[0.25rem] gap-x-3 bg-neutral-200 rounded-md border border-grey-200  transition-all duration-300 hover:bg-[#E5E5E5] font-semibold">Create Repo</button>
    </div>
      <ul className="text-repoColor dark:text-[#d9cccc] mt-8 w-full">
        {filteredRepos.slice(start, end).map((repo) => (
          <RepoForm key={repo.id} repo={repo} onDelete={handleDelete} />
        ))}
      </ul>
      {filteredRepos.length === 0 && (
        <div className="">
          <p className="text-neutral-500 dark:text-neutral-400">
            No repositories found
          </p>
        </div>
      )}
    </div>
    <div
      className={`flex flex-col items-start gap-y-3 md:flex-row justify-between md:items-center py-8 border-t border-grey-200 ${
        search !== "" ? "hidden" : ""
      }`}
    >
      <div className="flex items-center gap-x-2 flex-wrap">
        <button
          className={`px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5] ${
            page === 1 ? "hidden" : ""
          }`}
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          Prev
        </button>
        <div>
          <p className="text-neutral-500 dark:text-neutral-400">
            Page {page} of {pageLength}
          </p>
        </div>
        {Array.from({ length: pageLength }, (_, index) => index + 1).map(
          (num) => (
            <button
              key={num}
              className={`px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5] ${
                num === page ? "bg-neutral-200" : ""
              }`}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          )
        )}
        <button
          className={`px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5] ${
            page === pageLength ? "hidden" : ""
          }`}
          onClick={() => setPage((prevPage) => Math.min(prevPage + 1, pageLength))}
        >
          Next
        </button>
      </div>
    </div>
  
    
  
    {isModalOpen && (
      <NewRepo onClose={() => setIsModalOpen(false)} onAddRepo={handleAddRepo} />
    )}
  </main>
  );
};

export default Repos;
