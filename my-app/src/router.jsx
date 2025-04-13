import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TestPage from "./pages/TestPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AboutPage from "./pages/AboutPage";
import OrdersPage from "./pages/OrdersPage";
import CheckoutPage from "./pages/CheckoutPage";
import Favourites from "./components/Favourites/Favourites";
import Accounts from "./components/Accounts/Accounts";
import { Navigate } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import AuthPage from "./pages/AuthPage";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "test", element: <TestPage /> },
      { path: "shop/:categoryType/:categoryName", element: <CategoryPage /> },
      { path: "product/:id", element: <ProductPage /> },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <CartPage />{" "}
          </PrivateRoute>
        ),
      },
      { path: "about", element: <AboutPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "search", element: <SearchResultsPage /> },
      {
        path: "account",
        element: (
          <PrivateRoute>
            <AccountPage />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Navigate to="accountInfo" replace /> },
          { path: "favorites", element: <Favourites /> },
          { path: "orders", element: <Orders /> },
          { path: "accountInfo", element: <Accounts /> },
        ],
      },
      { path: "auth", element: <AuthPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
