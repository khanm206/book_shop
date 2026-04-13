import React from "react";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../listedBooks/ReadList";
import Wishlist from "../wishlist/Wishlist";

const BooksPage = () => {
  const { readBookList, wishBookList } = useContext(BookContext);
  return (
    <section className="my-10 mx-auto">
      <div className="bg-base-200 py-6 flex justify-center items-center rounded-2xl mb-10">
        <h1 className="text-3xl font-semibold">Books</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books ({readBookList.length})</Tab>
          <Tab>Wishlist Books ({wishBookList.length})</Tab>
        </TabList>

        <TabPanel className="mt-6">
          <ReadList />
        </TabPanel>
        <TabPanel className="mt-6">
          <Wishlist />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default BooksPage;
