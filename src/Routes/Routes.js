import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import MovieCard from "../Pages/MovieCard/MovieCard";
import ErrorPage from "../Shared/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MovieCard />,
      },
      {
        path: "/home",
        element: <MovieCard />,
      },
      {
        path: "/bookingDetails",
        element: <BookingDetails />,
      },
    ],
  },
]);
