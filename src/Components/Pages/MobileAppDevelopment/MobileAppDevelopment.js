import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PWA from "./PWA";
import IOS from "./IOS";
import AndroidDevelopment from "./Android";
import HybridApp from "./HybridApp";

const MobileAppDevelopment = () => {
  
  return (
    <div>
      <h1>MobileAppDevelopment</h1>
      <Box id="ios">
        <h2>Section 1 IOS </h2>
        <IOS />
      </Box>
      <Box id="android">
        <h2>Section 2 ANDROID </h2>
        <AndroidDevelopment />
      </Box>
      <Box id="hybrid">
        <h2>Section 3 HYBRID APP </h2>
        <HybridApp />
      </Box>
      <Box id="pwa">
        <h2>Section 4 PWA </h2>
        <PWA />
      </Box>
    </div>
  );
};

export default MobileAppDevelopment;
