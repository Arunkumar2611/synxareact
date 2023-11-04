import React from 'react'
import Chrome from './Chrome';
import Safari from './Safari';
import Firefox from './Firefox';
import Edge from './Edge';
import { Box } from '@mui/material';

const BrowserExtnDevelopment = () => {
    return (
        <div>
          <h1>Browser Extension Development</h1>
          <Box id="chrome">
            <h2>Section 1 Chrome </h2>
            <Chrome />
          </Box>
          <Box id="safari">
            <h2>Section 2 Safari </h2>
            <Safari />
          </Box>
          <Box id="firefox">
            <h2>Section 3 Firefox </h2>
            <Firefox />
          </Box>
          <Box id="edge">
            <h2>Section 4 Edge </h2>
            <Edge />
          </Box>
        </div>
      );
}

export default BrowserExtnDevelopment