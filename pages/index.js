import Head from "next/head";
import { useState } from "react";
import CreateForm from '../components/CreateForm';
import Header from "../components/Header";
import ReportTable from '../components/ReportTable'
import Footer from "../components/Footer";
import LoginForm from '../components/LoginForm'
import { useAuth } from "@/contexts/auth";




export default function Home() {

  const [data, setData] = useState([])

  const [state, setState] = useState({
    username: null,
    password: null
  })

  function dataHandler(event) {
    event.preventDefault();
    const dataObj = {
      location: event.target.location.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    }

    setData([...data, dataObj])
  }

  function loginHandler(event) {
    event.preventDefault();
    const dataObj = {
      username: event.target.username.value,
      password: event.target.password.value

    }
    setState(prevState => ({ ...prevState, ...dataObj }));

    login(state.username, state.password)



  }

  const { login, user, logout } = useAuth();
  return (
    <>
      {user ? (
        <>
          <Head>
            <title> Cookie Stand Admin </title>
          
            
          

          </Head>

          <Header />

          <main>


            <CreateForm handler={dataHandler} />

            <ReportTable reports={data} />

            <button className="p-2 text-white bg-green-500 rounded" onClick={() => logout()}>Logout</button>

          </main>
          <Footer locations={data.length} />
        </>
      ) : (
        <>
          <LoginForm handler={loginHandler} />
          {/* <button className="p-2 text-white bg-gray-500 rounded" onClick={() => login("toqa", "toqa2121")}> SIGN IN </button> */}
        </>
      )}



    </>
  )
}