"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    hidden: { 
      x: "100%", 
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const mobileItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed left-0 top-0 z-[99999] w-full transition-all duration-300 ${
        stickyMenu
          ? "bg-navy/95 backdrop-blur-lg py-4 shadow-lg shadow-navy/20"
          : "bg-transparent py-6"
      }`}
    >
      {/* Subtle top border glow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        {/* Logo Section */}
        <motion.div
          variants={navItemVariants}
          className="flex w-full items-center justify-between xl:w-auto"
        >
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-royal-blue text-2xl shadow-lg"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 25px rgba(245, 197, 66, 0.6)",
                rotate: 5
              }}
              transition={{ duration: 0.3 }}
            >
              🏛️
            </motion.div>
            <div className="hidden text-white md:block">
              <motion.h1 
                className="text-lg font-bold leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Global Institute of
              </motion.h1>
              <motion.p 
                className="text-sm text-gold font-medium"
                whileHover={{ color: "#f4b823" }}
              >
                Human Capital and Resources
              </motion.p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <motion.button
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <motion.span
                className="absolute right-0 block h-full w-full"
                animate={navigationOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-[0] duration-200 ease-in-out"></span>
                <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-150 duration-200 ease-in-out"></span>
              </motion.span>
              <motion.span
                className="absolute right-0 h-full w-full rotate-45"
                animate={navigationOpen ? { rotate: -45, y: 0 } : { rotate: 45, y: 6 }}
                transition={{ duration: 0.3 }}
              >
                <span className="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-gold"></span>
                <span className="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-gold"></span>
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex xl:items-center xl:space-x-8">
          {menuData.map((menuItem, index) => (
            <motion.div
              key={menuItem.id}
              variants={navItemVariants}
              className="group relative"
              onMouseEnter={() => menuItem.submenu && setDropdownToggler(true)}
              onMouseLeave={() => menuItem.submenu && setDropdownToggler(false)}
            >
              {menuItem.submenu ? (
                <div className="relative">
                  <motion.button
                    className="flex items-center space-x-1 text-white hover:text-gold transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium">{menuItem.title}</span>
                    <motion.svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={dropdownToggler ? { rotate: 180 } : { rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-royal-blue"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {dropdownToggler && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-4 w-64 rounded-lg bg-navy/95 backdrop-blur-lg border border-gold/20 shadow-2xl"
                      >
                        <div className="p-2">
                          {menuItem.submenu.map((subItem) => (
                            <motion.div
                              key={subItem.id}
                              whileHover={{ x: 8 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                href={subItem.path}
                                className="block rounded-md px-4 py-3 text-white hover:bg-gold/10 hover:text-gold transition-all duration-300"
                              >
                                {subItem.title}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href={menuItem.path} className="relative">
                  <motion.span
                    className="font-medium text-white hover:text-gold transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuItem.title}
                  </motion.span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-royal-blue"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          variants={navItemVariants}
          className="hidden xl:block"
        >
          <motion.button
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-royal-blue to-gold px-8 py-3 font-semibold text-white shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(245, 197, 66, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold to-royal-blue opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Apply Now</span>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gold opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </motion.div>

        {/* Theme Toggler */}
        <div className="hidden xl:block">
          <ThemeToggler />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navigationOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[99999] w-80 bg-navy/95 backdrop-blur-lg shadow-2xl xl:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="mb-8 flex items-center justify-between">
                <motion.h2
                  variants={mobileItemVariants}
                  className="text-xl font-bold text-white"
                >
                  Navigation
                </motion.h2>
                <motion.button
                  variants={mobileItemVariants}
                  onClick={() => setNavigationOpen(false)}
                  className="text-gold hover:text-goldho"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <nav className="flex-1 space-y-2">
                {menuData.map((menuItem, index) => (
                  <motion.div
                    key={menuItem.id}
                    variants={mobileItemVariants}
                    custom={index}
                  >
                    <Link
                      href={menuItem.path}
                      className="block rounded-lg px-4 py-3 text-white hover:bg-gold/10 hover:text-gold transition-all duration-300"
                      onClick={() => setNavigationOpen(false)}
                    >
                      {menuItem.title}
                    </Link>
                    {menuItem.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {menuItem.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.path}
                            className="block rounded-md px-4 py-2 text-sm text-gray-300 hover:text-gold transition-colors duration-300"
                            onClick={() => setNavigationOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                variants={mobileItemVariants}
                className="mt-8 space-y-4"
              >
                <motion.button
                  className="w-full rounded-full bg-gradient-to-r from-royal-blue to-gold px-6 py-3 font-semibold text-white shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
                <div className="flex justify-center">
                  <ThemeToggler />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {navigationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99998] bg-black/50 backdrop-blur-sm xl:hidden"
            onClick={() => setNavigationOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-0 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "w-full! delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 w-full!" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "w-full! delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "h-0! delay-0" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "h-0! delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar visible! mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />

            <Link
              href="https://github.com/NextJSTemplates/solid-nextjs"
              className="text-regular font-medium text-waterloo hover:text-primary"
            >
              GitHub Repo 🌟
            </Link>

            <Link
              href="https://nextjstemplates.com/templates/solid"
              className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
            >
              Get Pro 🔥
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
