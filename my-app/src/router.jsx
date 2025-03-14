import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TestPage from './pages/TestPage';
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import FavouritesPage from "./pages/FavouritesPage";
import LoginPage from "./pages/LoginPage";
import SearchResultsPage from "./pages/SearchResultsPage"
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import OrdersPage from "./pages/OrdersPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {index : true, element : <Home />},
            {path : 'test' , element : <TestPage />},
            {path : 'categories/:category', element : <CategoryPage/>},
            {path : 'product/:productId', element : <ProductPage/>},
            {path : 'cart', element : <CartPage/>},
            {path : 'account', element :<AccountPage /> },
            {path : 'favourites', element : <FavouritesPage/>},
            {path : 'login', element : <LoginPage/>},
            {path : 'signup', element : <SignupPage/>},
            {path : 'about', element : <AboutPage/>},
            {path : 'orders', element : <OrdersPage/>},
            {path : 'checkout', element : <CheckoutPage/>}, 
            {path : 'search', element : <SearchResultsPage />}

        ],
    },
    {path : '*', element : <NotFound />}
])


export default function AppRouter(){
    return <RouterProvider router={router} />
}