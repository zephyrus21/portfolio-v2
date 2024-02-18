import { NextPage } from 'next';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header: NextPage = () => {
  return (
    <div className='m-auto flex flex-col justify-center items-center h-screen gap-4'>
      <Image src='/apple_me.png' alt='me' height={120} width={100} />
      <div className='sm:text-6xl text-4xl font-medium'>Piyush Pandey</div>
      <div className='text-neutral-500 dark:text-neutral-400 font-medium sm:text-3xl text-2xl'>
        Software Engineer
      </div>
      <div className='text-center dark:text-neutral-500 text-neutral-700 sm:text-lg font-medium max-w-[48rem] px-4 flex flex-col gap-4 mt-8'>
        <p className='sm:text-xl mb-6'>
          I{"'"}m from India having proficiency in Golang and Typescript.
          Currently I am working at Mable as a Software Engineer.
        </p>
        <p>
          A big fan of open source and love to contribute to open source
          projects. I have a passion for building scalable and maintainable
          software with a good understanding of cloud technologies and have
          experience in building and deploying scalable applications on AWS and
          GCP, I have a good understanding of microservices architecture and
          distributed systems.
        </p>
      </div>
      <div className='flex gap-10 mt-8'>
        <a
          href='https://github.com/zephyrus21'
          className='flex items-center gap-2 font-medium text-sm '>
          <FaGithub size={24} />
          <span className='hidden sm:block'>GitHub</span>
        </a>
        <a
          href='https://twitter.com/zephyrus_io'
          className='flex items-center gap-2 font-medium text-sm'>
          <FaTwitter size={24} />
          <span className='hidden sm:block'>Twitter</span>
        </a>
        <a
          href='https://linkedin.com/in/zephyrus21'
          className='flex items-center gap-2 font-medium text-sm'>
          <FaLinkedin size={24} />
          <span className='hidden sm:block'>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
