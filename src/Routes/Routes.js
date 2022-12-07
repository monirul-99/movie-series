import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import BookingSit from "../Pages/BookingSit/BookingSit";
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
        path: "/booking",
        element: <BookingSit />,
      },
      {
        path: "/bookingDetails",
        element: <BookingDetails />,
      },
    ],
  },
]);
