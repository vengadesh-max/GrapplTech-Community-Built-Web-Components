import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
       <Box sx={{
        my:15 ,textAlign:'center',
        p:2,
        '& h4':{
          fontWeight: 'bold',
          my:2,
          fontSize:'2rem'
        },
        '& p':{
          textAlign: 'justify'
        },
        '@media (max-width:600px)':{   mt:0, 
          '& h4':{fontSize:'1.5rem'},},
       }}>
        <Typography variant='h4'>
          Wellcome To My resturant
        </Typography>
        <p>Early eating establishments recognizable as restaurants in the modern sense emerged in Song dynasty China during the 11th and 12th centuries. In large cities, such as Kaifeng and Hangzhou, food catering establishments catered to merchants who travelled between cities. Probably growing out of tea houses and taverns which catered to travellers, Kaifeng's restaurants blossomed into an industry that catered to locals as well as people from other regions of China. As travelling merchants were not used to the local cuisine of other cities, these establishments were set up to serve dishes familiar to merchants from other parts of China. Such establishments were located in the entertainment districts of major cities, alongside hotels, bars, and brothels. The larger and more opulent of these establishments offered a dining experience similar to modern restaurant culture. According to a Chinese manuscript from 1126, patrons of one such establishment were greeted with a selection of pre-plated demonstration dishes which represented food options. Customers had their orders taken by a team of waiters who would then sing their orders to the kitchen and distribute the dishes in the exact order in which they had been ordered.</p>
        <br/>
        <p>Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices, to expensive establishments serving refined food and fine wines in a formal setting. In the former case, customers usually wear casual clothing. In the latter case, depending on culture and local traditions, customers might wear semi-casual, semi-formal or formal wear. Typically, at mid- to high-priced restaurants, customers sit at tables, their orders are taken by a waiter, who brings the food when it is ready. After eating, the customers then pay the bill. In some restaurants, such as those in workplaces, there are usually no waiters; the customers use trays, on which they place cold items that they select from a refrigerated container and hot items which they request from cooks, and then they pay a cashier before they sit down. Another restaurant approach which uses few waiters is the buffet restaurant. Customers serve food onto their own plates and then pay at the end of the meal. Buffet restaurants typically still have waiters to serve drinks and alcoholic beverages. Fast food establishments are also considered to be restaurants. In addition, food trucks are another popular option for people who want quick food service.</p>
       </Box>
    </Layout>
  );
}

export default About;