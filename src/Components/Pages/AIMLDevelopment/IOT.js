import { Box, Grid } from '@mui/material'
import React from 'react'

const IOT = () => {
  return (
    <Box>
            <Grid container>
            <Grid item xs={12} sm={6}>
                    <h2> Development</h2>
                    <p>
                        We create fast, reliable, and engaging Progressive Web Apps (PWA) using React, Angular, and Vue. Our web apps work seamlessly across all devices, ensuring an exceptional user experience.
                    </p>
                    <p>
                        Our Progressive web applications ensure smooth performance and render a native alike experience. We work with an aim to optimize and maximize user engagement and make mobile applications readily accessible with less effort across all platforms.
                    </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src='https://images.prismic.io/ionicframeworkcom/10d173017f0ea8bdb2113f39e83de37af5562833_progressive-web-app-pwa-what-is.png?auto=compress,format' alt='pwa' height={500} width={500} />
                </Grid>
                
            </Grid>
        </Box>
  )
}

export default IOT