import { NextPage } from "next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

const NavBar: NextPage = () => {
  return (
    <div className='flex w-full justify-between items-center h-20 px-24 fixed bg-white'>
      <Link href={"/"}>
        <p className='font-bold text-2xl font-secondary'>piyush</p>
      </Link>
      {/* <p className='flex items-center gap-2 font-bold text-lg font-secondary'>
        <FaGithub size={28} />
        GitHub
      </p>
      <p className='flex items-center gap-2 font-bold text-lg font-secondary'>
        <FaTwitter size={28} />
        Twitter
      </p>
      <p className='flex items-center gap-2 font-bold text-lg font-secondary'>
        <FaLinkedin size={28} />
        LinkedIn
      </p>
      <p className='flex items-center gap-2 font-bold text-lg font-secondary'>
        <AiFillInstagram size={30} />
        Instagram
      </p>
      <p className='flex items-center gap-2 font-bold text-lg font-secondary'>
        <IoMail size={30} />
        Email
      </p> */}
      <a
        className='text-white bg-black rounded-full px-6 py-2 text-lg'
        href='mailto:pandey.piyus@gmail.com'>
        Contact
      </a>
    </div>
  );
};

export default NavBar;
