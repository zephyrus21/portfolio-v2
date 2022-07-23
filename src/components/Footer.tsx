import { NextPage } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: NextPage = () => {
  return (
    <footer className='bg-black absolute bottom-0 w-full text-white px-24 py-16 flex justify-between font-secondary'>
      <Link href={"/"}>
        <p className='flex flex-col font-bold text-2xl'>piyush</p>
      </Link>
      <div className='flex gap-6'>
        <a
          href='https://github.com/zephyrus21'
          className='flex items-center gap-2 font-bold text-sm '>
          <FaGithub size={24} />
          GitHub
        </a>
        <a
          href='https://twitter.com/zephyrus_io'
          className='flex items-center gap-2 font-bold text-sm'>
          <FaTwitter size={24} />
          Twitter
        </a>
        <a
          href='https://linkedin.com/in/zephyrus21'
          className='flex items-center gap-2 font-bold text-sm'>
          <FaLinkedin size={24} />
          LinkedIn
        </a>
      </div>
      {/* <p>© 2022</p> */}
    </footer>
  );
};

export default Footer;
