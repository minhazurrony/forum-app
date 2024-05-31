"use client";

import { useEffect, useState } from "react";
import { Pagination, PostCard } from "./components";
import { PostData, UserData } from "./types";
import { getRandomNumber } from "./utils";
import { FaCode, FaBitcoinSign, FaPencil } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import dynamic from "next/dynamic";
import { API_URL, PER_PAGE_DATA_LIMIT } from "./constants";

const NoSSR = dynamic(() => import("./components/PlaceholderComponent"), {
  ssr: false,
});

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [isLoadingPost, setIsLoadingPost] = useState<Boolean>(false);

  const fetchPosts = async () => {
    try {
      setIsLoadingPost(true);
      const response = await fetch(
        `${API_URL}/posts?_sort=id&_order=DESC&_page=${activePage}&_per_page=${PER_PAGE_DATA_LIMIT}`
      );
      const jsonResponse = await response.json();
      setPosts(jsonResponse);
      setIsLoadingPost(false);
    } catch (error) {
      console.error(error);
      setIsLoadingPost(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      const jsonResponse = await response.json();
      setUsers(jsonResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [activePage]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePaginationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setActivePage(+target.innerText);
  };

  return (
    <main className="flex flex-col md:max-md:flex-col lg:flex-row gap-10 bg-base-300 min-h-lvh py-10 px-3 lg:px-10">
      <div className="basis-full lg:basis-1/4">
        <div className="flex flex-col items-center space-y-10">
          <NoSSR
            title="popular tags"
            data={[
              {
                title: "#javascript",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-orange-200 rounded flex justify-center items-center">
                    <FaCode className="text-orange-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#bitcoin",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-violet-200 rounded flex justify-center items-center">
                    <FaBitcoinSign className="text-violet-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#design",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-pink-200 rounded flex justify-center items-center">
                    <MdOutlineDesignServices className="text-pink-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#innovation",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-indigo-200 rounded flex justify-center items-center">
                    <FaPencil className="text-indigo-700 text-2xl" />
                  </div>
                ),
              },
            ]}
          />
          <NoSSR
            title="pinned group"
            data={[
              {
                title: "#javascript",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-orange-200 rounded flex justify-center items-center">
                    <FaCode className="text-orange-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#bitcoin",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-violet-200 rounded flex justify-center items-center">
                    <FaBitcoinSign className="text-violet-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#design",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-pink-200 rounded flex justify-center items-center">
                    <MdOutlineDesignServices className="text-pink-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#innovation",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-indigo-200 rounded flex justify-center items-center">
                    <FaPencil className="text-indigo-700 text-2xl" />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="basis-full lg:basis-3/4">
        <PostCard posts={posts} users={users} isLoadingPost={isLoadingPost} />
        {posts.length > 0 && !isLoadingPost && (
          <div className="m-auto mt-8 flex items-center justify-center">
            <Pagination
              totalCount={100}
              limit={10}
              handleClick={handlePaginationClick}
              activePage={activePage}
            />
          </div>
        )}
      </div>

      <div className="basis-full lg:basis-1/4">
        <div className="flex flex-col items-center space-y-10">
          <NoSSR
            title="meetups"
            data={[
              {
                title: "#javascript",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-orange-200 rounded flex justify-center items-center">
                    <FaCode className="text-orange-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#bitcoin",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-violet-200 rounded flex justify-center items-center">
                    <FaBitcoinSign className="text-violet-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#design",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-pink-200 rounded flex justify-center items-center">
                    <MdOutlineDesignServices className="text-pink-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#innovation",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-indigo-200 rounded flex justify-center items-center">
                    <FaPencil className="text-indigo-700 text-2xl" />
                  </div>
                ),
              },
            ]}
          />
          <NoSSR
            title="podcasts"
            data={[
              {
                title: "#javascript",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-orange-200 rounded flex justify-center items-center">
                    <FaCode className="text-orange-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#bitcoin",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-violet-200 rounded flex justify-center items-center">
                    <FaBitcoinSign className="text-violet-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#design",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-pink-200 rounded flex justify-center items-center">
                    <MdOutlineDesignServices className="text-pink-700 text-2xl" />
                  </div>
                ),
              },
              {
                title: "#innovation",
                subTitle: `${getRandomNumber(100, 500)} Posted by this tag`,
                icon: (
                  <div className="w-8 h-8 bg-indigo-200 rounded flex justify-center items-center">
                    <FaPencil className="text-indigo-700 text-2xl" />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
