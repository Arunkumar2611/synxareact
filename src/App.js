import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Career from "./Components/Career/Career";
import AppBarComponent from "./Components/AppBarComponent/AppBarComponent";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import MobileAppDevelopment from "./Components/Pages/MobileAppDevelopment/MobileAppDevelopment";
import { Android } from "@mui/icons-material";
import HybridApp from "./Components/Pages/MobileAppDevelopment/HybridApp";
import IOS from "./Components/Pages/MobileAppDevelopment/IOS";
import PWA from "./Components/Pages/MobileAppDevelopment/PWA";
import AndroidDevelopment from "./Components/Pages/MobileAppDevelopment/Android";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppBarComponent />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/career",
          element: <Career />,
        },
        
        {
          path: "/mobileappdevelopment",
          element: <MobileAppDevelopment />,
        },
        {
          path: 'mobileappdevelopment/android',
          element: <AndroidDevelopment />,
        },
        {
          path: 'mobileappdevelopment/hybrid',
          element: <HybridApp />,
        },  
        {
          path: 'mobileappdevelopment/ios',
          element: <IOS />,
        },  
        {
          path: 'mobileappdevelopment/pwa',
          element: <PWA />,
        }, 
      ]
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
