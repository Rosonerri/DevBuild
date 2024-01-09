import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import HomeScreen from "../Components/HomeScreen";
import Contact from "../Components/Contact";
import About from "../Components/About";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            },
             {
                index: true,
                path: "/contact",
                element: <Contact/>
            },
             {
                index: true,
                path: "/about",
                element: <About/>
            }
        ]
    },
   
])