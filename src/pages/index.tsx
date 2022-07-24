import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Photo from "@components/Photo";
import Blog from "@components/Blog";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen font-primary'>
      <Head>
        <title>Piyush Pandey | v2</title>
      </Head>
      <NavBar />
      <Header />
      <Photo />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
