"use client";

import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Reaction from "./Reaction";
import { TfiComment, TfiShare } from "react-icons/tfi";
import { SlLike, SlDislike } from "react-icons/sl";
import { CommentsData } from "../types";
import CommentSkeleton from "./CommentSkeleton";
import { API_URL } from "../constants";

type CommentProps = {
  postId: number;
  openPostId: number | null;
};

export default function Comment({ postId, openPostId }: CommentProps) {
  const [comments, setComments] = useState<CommentsData[]>();
  const [isLoadingComment, setIsLoadingComment] = useState<Boolean>(false);

  const fetchCommentsByPostId = async () => {
    try {
      setIsLoadingComment(true);
      const response = await fetch(`${API_URL}/comments?postId=${postId}`);
      const jsonResponse = await response.json();
      setComments(jsonResponse);
      setIsLoadingComment(false);
    } catch (error) {
      console.error(error);
      setIsLoadingComment(false);
    }
  };

  useEffect(() => {
    if (postId === openPostId) {
      fetchCommentsByPostId();
    }
  }, [openPostId]);

  if (isLoadingComment) {
    return (
      <>
        {Array.from({ length: comments?.length as number }).map((_, idx) => {
          return <CommentSkeleton key={idx} />;
        })}
      </>
    );
  }

  return (
    <div className="collapse-content">
      {comments?.map((comment) => {
        return (
          <div className="bg-base-300 px-2 py-3 rounded mb-3" key={comment.id}>
            <Avatar name={comment.name} email={comment.email} />
            <p className="text-sm">{comment.body}</p>
            <div className="mt-4 flex items-center space-x-4">
              <Reaction icon={<SlLike />} />
              <Reaction icon={<SlDislike />} />
              <Reaction icon={<TfiComment />} />
              <Reaction icon={<TfiShare />} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
