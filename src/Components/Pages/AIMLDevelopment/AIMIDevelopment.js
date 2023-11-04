import React from 'react'
import AIandML from './AIandML'
import IOT from './IOT'
import ChatBot from './Chatbot'
import Automation from './Automation'
import { Box } from '@mui/material'

const AIMIDevelopment = () => {
  return (
    <div>
      <h1>AI and ML Development</h1>
      <Box id="aiandml">
        <h2>Section 1 AI&ML </h2>
        <AIandML />
      </Box>
      <Box id="iot">
        <h2>Section 2 IOT </h2>
        <IOT />
      </Box>
      <Box id="chatbot">
        <h2>Section 3 chatbot </h2>
        <ChatBot />
      </Box>
      <Box id="automation">
        <h2>Section 4 Automation </h2>
        <Automation />
      </Box>
    </div>
  )
}

export default AIMIDevelopment