import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Leftcontainer from '../components/Leftcontainer/Leftcontainer'
import Maincontainer from '../components/maincontainer/Maincontainer'
import Rightcontainer from '../components/Rightcontainer/Rightcontainer'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome | Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar />
     
     <main>
      
     <div className="main-wrapper">
        
     <Leftcontainer/>
     <Maincontainer/>
     <Rightcontainer/>
     </div>
     </main>
     <style jsx>
      {
        `
        main {
          width: 100%;
          display: flex;
          justify-content: center;
          background-color:#ededed;
      }

      .main-wrapper{
        width:100%;
        display: flex;
        max-width: 1280px;
       

    } 
    @media screen and (min-width: 750px) {
      .main-wrapper{
        display: flex;
        padding-top: 5px;
        padding-left: 5px;
        gap: 5px;
    }
    }

    @media screen and (min-width: 1050px){
      .main-wrapper {
        padding: 10px 0px;
        gap: 10px;
    }
    }
        
        `
      }
     </style>
    </>
  )
}

export default Home
