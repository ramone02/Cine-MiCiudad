import { createBrowserRouter } from "react-router-dom";
import { Estrenos, Faqs, Home } from "../Pages";
import { Public } from "../Layout/Public";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Public/>,
        errorElement: <h1 className="bg-red-600 text-gray-800 text-2xl">Not Found</h1>,
        children: [
            {    
                path: '/',
                Component: Home,
              }, 
              {
                path: '/estrenos',
                Component: Estrenos,
              },
              {
                path: '/faqs',
                Component: Faqs,
              }
        ]
    }
    ]);