import Head from "next/head";
import { useState } from "react";
import CreateForm from '../components/CreateForm';
import Header from "../components/Header";
import ReportTable from '../components/ReportTable'
import Footer from "../components/Footer"; 


export default function () {

  const [data, setData] = useState([])

  function dataHandler(event){
    event.preventDefault();
    const dataObj = {
      location : event.target.location.value, 
      hourly_sales : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    }

    setData([...data,dataObj])
  }
  return (
    <>
      <Head>
        <title> Cookie Stand Admin </title>
      </Head>

      <Header />

      <main>
        
        <CreateForm  handler={dataHandler}/>

        <ReportTable reports={data} />

      </main>
      <Footer locations={data.length}/>
      

    </>
  )
}