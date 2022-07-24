import { NextPage } from "next";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <div className='m-auto flex flex-col justify-center items-center h-screen gap-4'>
      <Image src='/apple_me.png' alt='me' height={120} width={100} />
      <div className='sm:text-6xl text-4xl font-medium'>Piyush Pandey</div>
      <div className='text-neutral-500 font-medium sm:text-3xl text-2xl'>
        Full Stack Developer
      </div>
      <div className='text-center text-neutral-700 sm:text-lg font-medium max-w-[48rem] px-4 flex flex-col gap-4 mt-8'>
        <p>
          I{"'"}m a Student and a passionate Full Stack Developer with
          experience in React.js, Next.js, Node.js, GraphQL and TypeScript to
          name a few.
        </p>
        <p>
          Currently I am exploring BlockChian Development with Ethereum,
          Solidity, Ethers.js and more.
        </p>
      </div>
    </div>
  );
};

export default Header;
