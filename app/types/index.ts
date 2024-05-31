export type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type CommentsData = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
