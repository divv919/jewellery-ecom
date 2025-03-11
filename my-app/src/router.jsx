import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TestPage from './pages/TestPage';
import CategoryPage from "./pages/CategoryPage";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {index : true, element : <Home />},
            {path : 'test' , element : <TestPage />},
            {path : 'categories', element : <CategoryPage/>},
        ],
    },
    {path : '*', element : <NotFound />}
])


export default function AppRouter(){
    return <RouterProvider router={router} />
}