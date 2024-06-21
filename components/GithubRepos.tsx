"use client";
import { useEffect, useState } from "react";
import { Dot } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkSquare02Icon } from "./Icons";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string;
  html_url: string;
  homepage: string | null;
};

const LoadingSkeleton = () => (
  <div className="flex flex-col rounded-md border bg-gray-900/10 border-gray-800/20 w-full p-3 relative overflow-hidden">
    <div className="flex items-center justify-between">
      <div className="text-lg bg-gray-700/20 h-6 w-3/4 rounded-sm skeleton-shimmer" />
      <div className="flex items-center justify-center gap-4 md:mr-2 mt-1">
        <div className="h-6 w-6 rounded-sm bg-gray-700/20 skeleton-shimmer" />
        <div className="h-6 w-6 rounded-sm bg-gray-700/20 skeleton-shimmer" />
      </div>
    </div>
    <div className="border border-b my-2 border-gray-500/10" />
    <div className="flex items-center">
      <div className="bg-gray-700/20 h-2 w-2 rounded-full skeleton-shimmer" />
      <div className="bg-gray-700/20 h-4 w-24 rounded-sm ml-2 skeleton-shimmer" />
    </div>
    <div className="my-3" />
    <div className="flex gap-4 items-center justify-normal flex-wrap">
      <div className="bg-gray-700/20 h-3 w-3 rounded-full skeleton-shimmer" />
      <div className="bg-gray-700/20 h-4 w-24 skeleton-shimmer" />
    </div>
  </div>
);
const GitHubRepo: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const perPage = 8;

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/harshyadavone/repos?per_page=${perPage}&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repos");
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (error) {
        setError("Error fetching GitHub repos. Please try again later.");
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  if (loading) {
    return (
      <section className="my-8 md:ml-8">
        <div className="w-full max-w-[1200px] relative">
          <h2 className="text-2xl md:pl-10 font-other mb-4">
            My GitHub Repositories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-10">
            {[...Array(perPage)].map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 my-8">{error}</p>;
  }

  return (
    <section className="my-8 md:ml-8">
      <div className="w-full max-w-[1200px]">
        <h2 className="text-2xl md:pl-10 font-other mb-4">
          My GitHub Repositories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-10">
          {repos.map((repo) => (
            <div
              className="card flex flex-col rounded-md border bg-gray-800/20 border-gray-500/20 w-full p-3"
              key={repo.id}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-other text-lg">{repo.name}</h1>
                <div className="flex items-center justify-center gap-4 mr-2 mt-1">
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={repo.html_url}
                    className="hover:bg-gray-500/10 p-2 rounded-lg transition-colors duration-300"
                  >
                    <GithubIcon />
                  </Link>
                  {repo.homepage && (
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href={repo.homepage}
                      className="hover:bg-gray-500/10 p-2 rounded-lg transition-colors duration-300"
                    >
                      <LinkSquare02Icon />
                    </Link>
                  )}
                </div>
              </div>
              <div className="border border-b my-2 border-gray-500/10" />
              <div>
                {repo.description ? (
                  <p className="font-other flex">
                    <Dot />
                    {repo.description}
                  </p>
                ) : (
                  <p className="font-other italic flex">No Description</p>
                )}

                <div className="my-3" />
                <div className="flex gap-4 items-center justify-normal flex-wrap">
                  {repo.language && (
                    <span className="flex items-center font-other ml-2 gap-2">
                      <div
                        className="w-2 h-2 rounded-full "
                        style={{
                          backgroundColor: getLanguageColor(repo.language),
                        }}
                      ></div>
                      {repo.language}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-8">
          <button
            className={`bg-gray-900/10 duration-300 text-white px-4 py-2 rounded-lg mr-2 ${
              page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700/20"
            }`}
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className={`bg-gray-900/10 text-white duration-300 px-4 py-2 rounded-lg ${
              repos.length < perPage
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700/20"
            }`}
            onClick={handleNextPage}
            disabled={repos.length < perPage}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

const getLanguageColor = (language: string): string => {
  switch (language.toLowerCase()) {
    case "typescript":
      return "#3178C6";
    case "javascript":
      return "#F0DB4F";
    case "python":
      return "#3572A5";
    case "java":
      return "#B07219";
    case "html":
    case "css":
      return "#E34C26";
    case "ruby":
      return "#701516";
    case "php":
      return "#4F5D95";
    default:
      return "#CCCCCC";
  }
};

export default GitHubRepo;
