import React from 'react'
import Layout from '../components/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
       <Box sx={{my: 10 , ml : 5,mr:6,
        "& h4":{fontWeight:'bold', 
       mb: 2,},
       '& p':{
          textAlign: 'justify',
          
        },
        '@media (max-width:600px)':{   mr:3.5,ml:3,
          '& h4':{fontSize:'1.5rem'},
          },}}>
        <Typography variant='h4'>
          contact My restaurant 
        </Typography>
        <p >
       The people of Hangzhou are very difficult to please. Hundreds of orders are given on all sides: this person wants something hot, another something cold, a third something tepid, a fourth something chilled.like his exploits, was widely and sympathetically reported in the press. His name entered the public argot as a term for one who eats excessively and does not pay. He was the subject of numerous
       </p>
       </Box>
       <Box sx={{m:3,width: '600px', ml:5,'@media (max-width :600px)':{width:"300px" ,  } }} >
        <TableContainer component={Paper}>
<Table aria-label='contact table' >
<TableHead>
  <TableRow>
    <TableCell sx={{bgcolor: "black" , color:'white'}} align='center' >Contact Detail</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  <TableRow>
    <TableCell> 
      <SupportAgentIcon sx={{color: 'red' , pt:1}} /> 0755-255-1222 (tollfree)
    </TableCell>
  </TableRow>
  <TableRow>
  <TableCell> 
      <EmailIcon sx={{color: 'blue', pt:1}} /> help@myrestrunt.com
    </TableCell>
  </TableRow>
  <TableRow>
  <TableCell> 
      <CallIcon sx={{color: 'green', pt:1}} /> 9075236289
    </TableCell>
  </TableRow>
</TableBody>
</ Table>
        </TableContainer>
       </Box>
    </Layout>
  )
}

export default Contact;