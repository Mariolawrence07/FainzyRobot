// import { Button } from "@mui/material";
import { RouteEnum } from "common/constants";
import Logo from "common/Logo";
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
// import { ReactComponent as Call } from "assets/svgs/call.svg";
// import { ReactComponent as Message } from "assets/svgs/message.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Grow from "@mui/material/Grow";
// import Paper from "@mui/material/Paper";
// import Popper from "@mui/material/Popper";
// import MenuItem from "@mui/material/MenuItem";
// import MenuList from "@mui/material/MenuList";
// import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Navbar(props) {
  const {i18n, t} = useTranslation(["common"])
  useEffect(()=>{
    if(localStorage.getItem("i18nextLng")?.length > 2){
      i18next.changeLanguage("en")
    }
  },[]);
  const handleLanguageChange = (e)=>{
    i18n.changeLanguage(e.target.value)

  }
  const { whiteNavbar } = props;
  const [isMenuLink, setIsMenuLink] = useState(true);
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const toggleMenuLink = () => setIsMenuLink(!isMenuLink);

  const [isFixedHeader, setIsFixedHeader] = React.useState(false);
  React.useLayoutEffect(() => {
    function handleScroll(e) {
      setIsFixedHeader(window.scrollY >= 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const selectLaguage = <div className="flex text-red">
    
    <select style={{background:"none", color:"white"}} value={localStorage.getItem("i18nextLng ")} onChange={handleLanguageChange}>
      <option value="en">
       En
      </option>
      <option value="jp">
       Jp
      </option>
    </select>
  </div>;
  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === "Tab") {
  //     event.preventDefault();
  //     setOpen(false);
  //   } else if (event.key === "Escape") {
  //     setOpen(false);
  //   }
  // }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div
      className={clsx(
        "fixed top-0 w-full  z-50 ",
        isFixedHeader ? "bg-white shadow" : ""
      )}
    >
      <div
        className={`w-full justify-center hidden md:flex   ${
          whiteNavbar ? "bg-white" : "bg-dark-blue"
        }`}
      >
        {/* <div className="container ">
          <div className="flex justify-between sm:flex-row flex-col py-2 ">
            <div
              className={`flex sm:flex-row flex-col gap-6 ${
                whiteNavbar ? "text-gray-500" : "text-gray-400"
              } font-semibold`}
            >
              <Typography variant="subtitle2" className="flex items-end">
                <Call
                  className={`${
                    whiteNavbar ? "fill-gray-500" : "fill-gray-400"
                  } mr-2`}
                />
                +91 233 4423
              </Typography>

              <Typography variant="subtitle2" className="flex items-end">
                <Message
                  className={`${
                    whiteNavbar ? "fill-gray-500" : "fill-gray-400"
                  } mr-2`}
                />
                info@fainzytech.com
              </Typography>
            </div>
            {selectLaguage}
          </div>
        </div> */}
      </div>

      <nav
        className={clsx(
          "border-gray-200 px-2 sm:px-4 py-2.5",
          isFixedHeader
            ? whiteNavbar
              ? "bg-primary-main"
              : "bg-white"
            : " bg-transparent"
        )}
      >
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" class="flex items-center">
            <Logo variant={whiteNavbar && "logo-white"} />
          </Link>
          <div className="flex items-center  md:hidden ">
            {selectLaguage}
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 "
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenuLink}
            >
              <span class="sr-only">Open main menu</span>

              {isMenuLink && (
                <svg
                  className={`w-6 h-6 ${
                    whiteNavbar ? "fill-white" : "fill-gray-500"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
              {!isMenuLink && (
                <svg
                  className={`w-6 h-6 ${
                    whiteNavbar ? "fill-white" : "fill-gray-500"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            class={` w-full ${isMd && "block"} md:w-auto ${
              !isMd && (!isMenuLink ? "block" : "hidden")
            } `}
            id="mobile-menu"
          >
            <div className="flex gap-24">
              <ul
                class={`flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium`}
              >
                {LINKS.map(({ name, sectionId, ...link }) => (
                  <li>
                    {!sectionId && (
                      <NavLink
                        key={name}
                        className={`block py-2 pr-4 pl-3 ${
                          whiteNavbar ? "text-white" : "text-dark-blue"
                        } rounded md:bg-transparent  md:p-0`}
                        {...link}
                        onClick={toggleMenuLink}
                      >
                        {t (name)}
                      </NavLink>
                    )}
                    {sectionId && (
                      <a
                        className={`block py-2 pr-4 pl-3 ${
                          whiteNavbar ? "text-white" : "text-dark-blue"
                        } rounded md:bg-transparent  md:p-0`}
                        onClick={toggleMenuLink}
                        href={sectionId}
                      >
                        {name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <ul
                class={`flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium`}
              >
                {/* <li>
                  <Stack
                    direction="row"
                    spacing={2}
                    className="flex items-center"
                  >
                    <div>{selectLaguage}</div>
                    <div>
                      <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? "composition-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        variant="contained"
                      >
                        Business
                      </Button>
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom-start"
                                  ? "left top"
                                  : "left bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                  autoFocusItem={open}
                                  id="composition-menu"
                                  aria-labelledby="composition-button"
                                  onKeyDown={handleListKeyDown}
                                  className="mt-2"
                                >
                                  <MenuItem onClick={handleClose}>
                                    <Link to="/login">SignIn</Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    <Link to="/register">Get Started</Link>
                                  </MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </div>
                  </Stack>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

const LINKS = [
  { name: "About Us", to: RouteEnum.ABOUT },
  { name: "Products", to: RouteEnum.PRODUCTS, sectionId: "#products" },
  { name: "Careers", to: RouteEnum.CAREERS },
  { name: "Contact Us", to: RouteEnum.CONTACT_US },
  // { name: "Blog", to: RouteEnum.CONTACT_US },
];
