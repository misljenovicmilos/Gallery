export const getImg = async (search: string) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/?key=" +
      process.env.REACT_APP_API_KEY +
      "&q=" +
      search +
      "&orientation=all&per_page=20"
  );
};
