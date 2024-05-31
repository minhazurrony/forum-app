export const getPlaceholderImage = (id: number) => {
  if (id % 2 === 0) {
    return "/images/post-placeholder.jpg";
  }
  return "/images/post-placeholder.jpeg";
};
