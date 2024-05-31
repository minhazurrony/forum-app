"use client";

import React from "react";
import Avatar from "./Avatar";
import { SlDislike, SlLike } from "react-icons/sl";
import Reaction from "./Reaction";
import Image from "next/image";
import { PostData, UserData } from "../types";
import { getPlaceholderImage, getRandomNumber } from "../utils";

type PostProps = {
  post: PostData;
  user: Partial<UserData> | undefined;
};

export default function Post({ post, user }: PostProps) {
  return (
    <div className="collapse-title pe-4 lg:pe-12">
      <div className="flex flex-col lg:flex-row gap-6">
        <Image
          src={getPlaceholderImage(post.id)}
          alt="post-image"
          width={150}
          height={150}
          style={{ objectFit: "cover" }}
          className="rounded w-auto h-auto object-contain"
          priority={true}
        />
        <article>
          <h1 className="text-neutral-50 text-lg font-semibold text-pretty mb-4">
            {post?.title}
          </h1>
          <p className="text-sm text-pretty mb-4">{post?.body}</p>
          <div className="flex justify-between items-center">
            <Avatar name={user?.name || ""} email={user?.email || ""} />
            <div className="flex items-center space-x-4">
              <Reaction
                icon={<SlLike />}
                count={getRandomNumber(50, 150)}
                label="Likes"
              />
              <Reaction
                icon={<SlDislike />}
                count={getRandomNumber(1, 50)}
                label="Dislikes"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
