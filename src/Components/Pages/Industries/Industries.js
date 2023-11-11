import { Box } from '@mui/material'
import React from 'react'
import StartupCompanies from './StartupCompanies'
import FintechStartups from './FintechStartups'
import RetailIndustry from './RetailIndustry'
import ECommerceBusinesses from './ECommerceBusinesses'
import AdvertisingAgencies from './AdvertisingAgencies'
import EducationalInstitutions from './EducationalInstitutions'
import Interprises from './Interprises'
import ClimateTech from './ClimateTech'

const Industries = () => {
  return (
    <div>
      <h1>Industries</h1>
      <Box id="startup-companies">
        <h2>Section 1 startup-companies </h2>
        <StartupCompanies />
      </Box>
      <Box id="fintech-startups">
        <h2>Section 2 fintech-startups </h2>
        <FintechStartups />
      </Box>
      <Box id="retail-industry">
        <h2>Section 3 retail-industry</h2>
        <RetailIndustry />
      </Box>
      <Box id="e-commerce-businesses">
        <h2>Section 4 e-commerce-businesses</h2>
        <ECommerceBusinesses />
      </Box>
      <Box id="advertising-agencies">
        <h2>Section 5 advertising-agencies</h2>
        <AdvertisingAgencies />
      </Box>
      <Box id="educational-institutions">
        <h2>Section 6 educational-institutions</h2>
        <EducationalInstitutions />
      </Box>
      <Box id="interprises">
        <h2>Section 7 interprises</h2>
        <Interprises />
      </Box>
      <Box id="climate-tech">
        <h2>Section 8 climate-tech</h2>
        <ClimateTech />
      </Box>

    </div>
  )
}

export default Industries