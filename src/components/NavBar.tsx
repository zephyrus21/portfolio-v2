import { NextPage } from "next";
import Link from "next/link";

const NavBar: NextPage = () => {
  return (
    <div className='flex w-full justify-between items-center h-20 px-8 md:px-24 fixed bg-white'>
      <Link href={"/"}>
        <p className='font-bold text-2xl font-secondary'>piyush</p>
      </Link>
      <a
        className='text-white bg-black rounded-full px-6 py-2 text-lg'
        href='mailto:pandey.piyus@gmail.com'>
        Contact
      </a>
    </div>
  );
};

export default NavBar;
