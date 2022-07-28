import { NextPage } from "next";
import Image from "next/image";

const Blog: NextPage = () => {
  return (
    <>
      <div className='w-full flex items-center justify-around m-20'>
        <div className='w-1/2'></div>
        <Image
          className='w-1/2 grayscale hover:grayscale-0 transition-all duration-500'
          src='/mac.jpeg'
          alt='mac'
          height={"640px"}
          width={"400px"}
        />
        {/* <Image src='/leaf.jpeg' alt='leaf' height={"640px"} width={"400px"} /> */}
      </div>
      <div className='w-full flex items-center justify-around m-20'>
        {/* <Image src='/mac.jpeg' alt='mac' height={"640px"} width={"400px"} /> */}
        <Image
          className='w-1/2 grayscale hover:grayscale-0 transition-all duration-500'
          src='/leaf.jpeg'
          alt='leaf'
          height={"640px"}
          width={"400px"}
        />
        <div className='w-1/2'></div>
      </div>
    </>
  );
};

export default Blog;
