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
import AIMIDevelopment from "./Components/Pages/AIMLDevelopment/AIMIDevelopment";
import ScrollToTop from "./Components/ScrollToUp";
import BrowserExtnDevelopment from "./Components/Pages/BrowserExtnDevelopment/BrowserExtnDevelopment";
import Web3Developmet from "./Components/Pages/Web3Devellopment/Web3Developmet";
import WebDevelopmentService from "./Components/Pages/WebDevelopmentService/WebDevelopmentService";
import HireRemoteTeam from "./Components/Pages/HireRemoteTeam/HireRemoteTeam";
import MobileAppDevelopmentTech from "./Components/Pages/MobileAppDevelopmentTech/MobileAppDevelopmentTech";
import FrontEndTech from "./Components/Pages/FrontEndTech/FrontEndTech";
import BackendTech from "./Components/Pages/BackendTech/BackendTech";
import FullStackTech from "./Components/Pages/FullStackTech/FullStackTech";
import FutureTech from "./Components/Pages/FutureTech/FutureTech";
import DevopsCloudTech from "./Components/Pages/DevopsCloudTech/DevopsCloudTech";


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
          path: "/ai-ml-and-iot-development",
          element: <AIMIDevelopment />,
        },
        {
          path: "/browser-extn-development",
          element: <BrowserExtnDevelopment />,
        },
        {
          path: "/web-3-development",
          element: <Web3Developmet />,
        },
        {
          path: "/web-development-service",
          element: <WebDevelopmentService />,
        },
        {
          path: "/hire-remote-team",
          element: <HireRemoteTeam />,
        },
        {
          path: "/mobile-app-dev-tech",
          element: <MobileAppDevelopmentTech />,
        },
        {
          path: "/frontend-tech",
          element: <FrontEndTech />,
        },
        {
          path: "/backend-tech",
          element: <BackendTech />,
        },
        {
          path: "/fullstack-tech",
          element: <FullStackTech />,
        },
        {
          path: "/future-tech",
          element: <FutureTech />,
        },
        {
          path: "/devops-cloud-tech",
          element: <DevopsCloudTech />,
        },
      ]
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
