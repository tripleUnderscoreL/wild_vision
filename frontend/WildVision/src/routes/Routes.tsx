import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage/MainPage";
import HomePage from "../pages/HomePage/HomePage";
import GuaranteesPage from "../pages/GuaranteesPage/GuaranteesPage";
import ReviewsPage from "../pages/ReviewsPage/ReviewsPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "", element: <HomePage></HomePage>},
      {path: "/catalog", element: <MainPage></MainPage>},
      {path:"/guarantees", element: <GuaranteesPage></GuaranteesPage>},
      {path:"/reviews", element: <ReviewsPage></ReviewsPage>},
      {path:"/payment", element: <PaymentPage></PaymentPage>},
    ],
  }

])