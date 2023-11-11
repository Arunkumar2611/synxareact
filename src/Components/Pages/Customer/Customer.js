import React from 'react'
import Portfolio from './Portfolio'
import { Box } from '@mui/material'
import Testimonials from './Testimonials'
import FeaturedWork from './FeaturedWork'

const Customer = () => {
  return (
    <div>
          <h1>Customers</h1>
          <Box id="portfolio">
            <h2>Section 1 Portfolio </h2>
            <Portfolio />
          </Box>
          <Box id="testimonials">
            <h2>Section 2 Testimonials </h2>
            <Testimonials />
          </Box>
          <Box id="featured-work">
            <h2>Section 3 Featured Work</h2>
            <FeaturedWork />
          </Box>
          
        </div>
  )
}

export default Customer