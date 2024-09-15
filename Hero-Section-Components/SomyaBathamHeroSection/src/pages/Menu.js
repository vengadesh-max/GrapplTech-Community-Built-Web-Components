import React from 'react'
import {menulist} from "../Data/Data"
import Layout from '../components/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display: " flex ", mt:1, flexWrap:"wrap", justifyContent:"center" }} >
          {
             menulist.map((menu)=>(
              <Card sx={{ maxWidth: "400px", m: 2 }} >
                <CardActionArea>
                  <CardMedia sx={{ minHeight:"400px" }} 
                  component={"img"} 
                  src={menu.Image}
                  alt={menu.name} />
                </CardActionArea>
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2' > 
                  {menu.Description}
                  </Typography>
                </CardContent>
              </Card>
             ))

          }
        </Box>
    </Layout>
  )
}

export default Menu;