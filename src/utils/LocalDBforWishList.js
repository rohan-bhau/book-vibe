export const getWishListFromLocalDB = () => {
  const allWishLists = localStorage.getItem("wishList");
  // console.log(allReadLists, "read list from local DB")

  if (allWishLists) return JSON.parse(allWishLists);

  return [];
};

export const addWishListToLocalDB = (book) => {
  const allBooks = getWishListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allBooks));
  }
};
