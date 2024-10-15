import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "", element: <MainPage></MainPage>}
    ],
  }

])