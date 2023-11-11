import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import AppBarComponent from "./Components/AppBarComponent/AppBarComponent";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import MobileAppDevelopment from "./Components/Pages/MobileAppDevelopment/MobileAppDevelopment";
import AIMIDevelopment from "./Components/Pages/AIMLDevelopment/AIMIDevelopment";
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
import Industries from "./Components/Pages/Industries/Industries";
import './App.css'
import Customer from "./Components/Pages/Customer/Customer";
import Career from "./Components/Pages/Careers/Career";
import WorkLife from "./Components/Pages/Careers/WorkLife";
import ApplyJobs from "./Components/Pages/Careers/ApplyJobs";
import AboutUs from "./Components/Pages/Company/AboutUs";
import Infrastructure from "./Components/Pages/Company/Infrastructure";
import Enquery from "./Components/Pages/Company/Enquery";
import Blog from "./Components/Blog/Blog";

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
          path: "/careers",
          element: <Career />,
        },
        {
          path: "/life-at-synxa",
          element: <WorkLife />,
        },
        {
          path: "/apply-for-job",
          element: <ApplyJobs />,
        },
        
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/infrastructure",
          element: <Infrastructure />,
        },
        {
          path: "/enquiry",
          element: <Enquery />,
        },
        {
          path: "/blog",
          element: <Blog />,
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
        {
          path: "/mobile-application-technologies",
          element: <MobileAppDevelopmentTech />,
        },
        {
          path: "/frontend-technologies",
          element: <FrontEndTech />,
        },
        {
          path: "/backend-technologies",
          element: <BackendTech />,
        },
        {
          path: "/future-technologies",
          element: <FutureTech />,
        },
        {
          path: "/fullstack-technologies",
          element: <FullStackTech />,
        },
        {
          path: "/devops-cloud-technologies",
          element: <DevopsCloudTech />,
        },

        {
          path: "/industries",
          element: <Industries />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
        
        
      ]
    },
    
  ]);

  return <div className="App"><RouterProvider router={router} /></div>;
}

export default App;
