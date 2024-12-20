import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage/MainPage";
import HomePage from "../pages/HomePage/HomePage";
import GuaranteesPage from "../pages/GuaranteesPage/GuaranteesPage";
import ReviewsPage from "../pages/ReviewsPage/ReviewsPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import BasketPage from "../pages/BasketPage/BasketPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import FaqPage from "../pages/FaqPage/FaqPage";
import NotFoundPage from "../pages/404Page/404Page";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProtectedRoute from "../guard";



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
      {path:"/basket", element: <BasketPage></BasketPage>},
      { 
        path: "/profile", 
        element: <ProtectedRoute element={<ProfilePage />} /> // Используем guard
      },
      {path:"/faq", element: <FaqPage></FaqPage>},
      {path:"/product/:id", element: <ProductPage></ProductPage>},
      {path:"*", element: <NotFoundPage></NotFoundPage>}
      
    ],
  }

])