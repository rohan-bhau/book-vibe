import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';

const Books = () => {
      const { setStoredBooks, storedBooks } = useContext(BookContext);
    console.log(setStoredBooks, storedBooks);
    
    const [sortedType, setSortedType] = useState("")
    console.log(sortedType, "sortedType");
    

    return (
      <div className="container mx-auto my-8">
        <div className="dropdown dropdown-bottom dropdown-center flex justify-center mb-10">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By: {sortedType} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortedType("name")}>
              <a>Name</a>
            </li>
            <li onClick={() => setSortedType("pages")}>
              <a>Page</a>
            </li>
            <li onClick={() => setSortedType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>

        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ListedReadList sortedType={sortedType}></ListedReadList>
          </TabPanel>
          <TabPanel>
            <ListedWishList sortedType={sortedType}></ListedWishList>
          </TabPanel>
        </Tabs>
      </div>
    );
}

export default Books;
