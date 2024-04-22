import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Repo = () => {
  const { name } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [userResponse, repoResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/Esimehro`),
          axios.get(`https://api.github.com/repos/Esimehro/${name}`)
        ]);
        setRepo({
          profile: userResponse.data,
          repo: repoResponse.data
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [name]);

  const convertDate = (date) => {
    return new Date(date).toString();
  };

  return (
    <section className="px-2">
      {loading && (
        <div className="content mx-auto container px-8 max-[375px]:px-2 flex items-center justify-center min-h-[calc(100vh-64px)] flex-col gap-4">
          <div className="mx-auto mt-10">Loading...</div>
        </div>
      )}
      {!loading && repo && (
        <div className="repo-container py-6 md:py-12 content mx-auto container px-8 max-[375px]:px-2 flex flex-col gap-4 max-[504px]:py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mt-8 md:w-1/3">
              <img
                src={repo.profile.avatar_url}
                alt="github repo octocat"
                className="w-3/4 object-cover aspect-square md:mt-8"
              />
            </div>

            <div className="md:w-2/3 mt-4">
              <div>
                <div className="flex items-center gap-x-2">
                  <img src="../assets/repo-icon.png" alt="" className="w-[24px]" />
                  <h1 className="text-xl md:text-2xl text-sky-500">{repo.repo.name}</h1>
                  <p className="text-repoColor text-xs px-[0.4375rem] leading-[1.125rem] border border-grey-100 capitalize rounded-3xl">
                  {repo.repo.visibility || 'No visibility'}
                  </p>
                </div>

                <p className="text-sm mt-2">
                  {repo.repo.description || 'No description'}
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <p className="text-lg">Created on {repo.repo.created_at ? convertDate(repo.repo.created_at) : 'Unknown'}</p>
                <p>Updated on {repo.repo.updated_at ? convertDate(repo.repo.updated_at) : 'Unknown'}</p>
                <p className="leading-[1.625rem] max-w-3xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nobis
                  accusamus omnis ex exercitationem perspiciatis repellat vitae animi incidunt
                  culpa numquam, eius asperiores ipsa rerum. Ipsa veniam doloremque dolorum
                  architecto? Amet odit illum ab in, doloremque ullam, tenetur illo eos quaerat
                  dicta quis facere, natus aspernatur beatae dolorem quod dolor reiciendis unde.
                  Eaque, consectetur nisi quibusdam atque quisquam deserunt. Quam!
                </p>
                <div className="flex gap-2 items-center">
                  <p className="flex gap-x-2 items-center text-3xl md:text-5xl">
                    <span>
                      
                    </span>
                    <span className="text-xl md:text-2xl">
                      {repo.parent ? repo.parent.stargazers_count : repo.stargazers_count}
                    </span>
                  </p>
                  <p className="flex gap-x-2 items-center text-3xl md:text-5xl">
                    <span>
                      
                    </span>
                    <span className="text-xl md:text-2xl">
                      {repo.parent ? repo.parent.watchers_count : repo.watchers_count}
                    </span>
                  </p>
                  <p className="flex gap-x-2 items-center text-3xl md:text-5xl">
                    <span>
                      
                    </span>
                    <span className="text-xl md:text-2xl">
                      {repo.parent ? repo.parent.forks_count : repo.forks_count}
                    </span>
                  </p>
                  <p>{repo.languages}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href={repo.repo.html_url}
                  className="block w-32 text-lg text-center py-2 bg-dark-yellow text-neutral-50 hover:bg-dark-yellow/80 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Page
                </a>
                <a
                  href="/repos"
                  className="block w-32 text-lg text-center py-2 bg-dark-yellow text-neutral-50 hover:bg-dark-yellow/80 transition-all duration-300"
                >
                  Back to Repo
                </a>
              </div>
            </div>
            {repo.owner && (
              <div>
              <p>{repo.owner.avatar_url}</p>
                <p>{repo.owner.login}</p>
                <p>{repo.full_name}</p>
                <p>{repo.html_url}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Repo;
