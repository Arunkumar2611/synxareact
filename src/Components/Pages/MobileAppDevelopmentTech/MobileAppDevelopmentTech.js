import React from 'react'
import { Box } from '@mui/material';
import Android from './Android';

const MobileAppDevelopmentTech = () => {
    return (
        <div>
          <h1>Mobile Application Technologies</h1>
          <Box id="android">
            <h2>Section 1 Android</h2>
            <Android />
          </Box>
          <Box id="ios">
            <h2>Section 2 </h2>

          </Box>
          <Box id="react-native">
            <h2>Section 3  </h2>

          </Box>
          <Box id="flutter">
            <h2>Section 4  </h2>

          </Box>
        </div>
      );
}

export default MobileAppDevelopmentTech