export const getReadListFromLocalDB = () => {
    const allReadLists = localStorage.getItem("readList")
    // console.log(allReadLists, "read list from local DB")

    if (allReadLists) return JSON.parse(allReadLists);

    return []
}


export const addReadListToLocalDB = (book) => {
    const allBooks = getReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)
    if (!isAlreadyExist) {
        allBooks.push(book)
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
};



