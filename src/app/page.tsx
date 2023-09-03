"use client";

import React from 'react'
import Navbar from './../../Components/Navbar'
import Hero from './../../Components/Hero'
import Card from './../../Components/Card'
import Tab from './../../Components/Tab'

import Chart from "../../chart/App"

 import { ChakraProvider} from '@chakra-ui/react'
  function page() {
  return (
    <>
    <ChakraProvider>
    <Navbar /> 
    {/* <OverviewFlow /> */}

    <Chart/>
 

    <Card/>

    <Tab/>
 

    </ChakraProvider>
    </>
  )
}

export default page