import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';

const Books = () => {
      const { setStoredBooks, storedBooks } = useContext(BookContext);
      console.log(setStoredBooks, storedBooks);
    return (
      <div className='container mx-auto my-16'>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
           <ListedReadList></ListedReadList>
          </TabPanel>
          <TabPanel>
          <ListedWishList></ListedWishList>
          </TabPanel>
        </Tabs>
      </div>
    );
}

export default Books;
