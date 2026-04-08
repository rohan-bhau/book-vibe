import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Books from "../pages/Books/Books";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import BookDetail from "../Components/homepage/BookDetail/BookDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "books",
        Component: Books,
      },

      {
        path: "/bookDetail/:id",
        Component: BookDetail,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
