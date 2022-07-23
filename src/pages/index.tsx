import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen font-primary'>
      <Head>
        <title>Piyush Pandey | v2</title>
      </Head>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Home;
