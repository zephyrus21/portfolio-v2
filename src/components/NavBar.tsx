import { NextPage } from "next";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

const NavBar: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <FaSun size={22} cursor='pointer' onClick={() => setTheme("light")} />
      );
    } else {
      return (
        <FaMoon size={22} cursor='pointer' onClick={() => setTheme("dark")} />
      );
    }
  };
  return (
    <div className='fixed flex w-full justify-between items-center h-20 px-8 md:px-24 bg-white dark:bg-black z-10'>
      <Link href={"/"}>
        <p className='font-bold text-2xl font-secondary dark:text-white'>
          piyush
        </p>
      </Link>
      <div className='flex items-center gap-8'>
        {renderThemeChanger()}
        <a
          className='text-white bg-black dark:text-black dark:bg-white rounded-full px-6 py-2 text-lg'
          href='mailto:pandey.piyus@gmail.com'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
