import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../components/homepage/Homepage";
import BooksPage from "../components/bookPage/BooksPage";
import Error from "../components/errorPage/Error";
import PageToRead from "../components/readPage/PageToRead";
import BookDetails from "../components/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/listed_books",
        element: <BooksPage />,
      },
      {
        path: "/pages_to_read",
        element: <PageToRead />,
      },
      {
        path: "/book_details/:id",
        element: <BookDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);
