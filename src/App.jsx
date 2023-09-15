// Desc: This is the main app component that will be rendered to the DOM

import './App.css'
import FAQ from './components/FAQ'
import ServicesProvided from './components/servicesProvided'
import Vision from './components/Vision'
import Navbar from './components/navBar'
import HomeMain from './components/HomeMainContent'
import ReviewSection from './components/ReviewSection'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Footer from './components/Footer'
import OnBoardSection from './components/OnBoardSection'


const theme = extendTheme({
  colors: {
    brand: {
      500: "#D2AE6D",
      600: "#D2AE6D"
    },
    black: {
      500: "#000000",
      600: "#000000"
    }
  }
});


function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="bgCover1 bg-fixed" />

        <Navbar />
        <HomeMain />
        <Vision />
        <ServicesProvided />
        <OnBoardSection />
        <FAQ />
        <ReviewSection />
        <Footer />
      </ChakraProvider>
    </>

  )
}

export default App;
