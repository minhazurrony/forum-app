"use client";

import React, { useState } from "react";
import Post from "./Post";
import Comment from "./Comment";
import { PostData, UserData } from "../types";
import PostSkeleton from "./PostSkeleton";

type PostCardProps = {
  users: UserData[];
  posts: PostData[];
  isLoadingPost: Boolean;
};

export default function PostCard({
  users,
  posts,
  isLoadingPost,
}: PostCardProps) {
  const [openPostId, setOpenPostId] = useState<number | null>(null);

  const handleCollapseClick = (postId: number) => {
    setOpenPostId((prevOpenPostId) =>
      prevOpenPostId === postId ? null : postId
    );
  };

  const mapUser = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user;
  };

  if (isLoadingPost) {
    return (
      <>
        {Array.from({ length: posts.length }).map((_, idx) => {
          return <PostSkeleton key={idx} />;
        })}
      </>
    );
  }

  return (
    <>
      {posts?.map((post: PostData) => {
        return (
          <div
            key={post.id}
            className={`collapse bg-base-100 mb-4 shadow-xl ${
              openPostId === post.id ? `collapse-open` : `collapse-close`
            }`}
            onClick={() => handleCollapseClick(post.id)}>
            <input
              type="radio"
              name="post-accordion"
              className="hover:cursor-pointer"
            />
            <Post post={post} user={mapUser(post.userId)} />
            <Comment postId={post.id} openPostId={openPostId} />
          </div>
        );
      })}
    </>
  );
}
