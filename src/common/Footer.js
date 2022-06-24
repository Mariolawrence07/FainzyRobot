import React from "react";
import Logo from "common/Logo";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-primary-main w-full ">
      <div className="flex justify-center">
        <div className="container flex md:flex-row flex-col my-16 gap-24 px-5 md:px-0">
          <div>
            <div>
              <Logo variant={"logo-white"} />
            </div>

            <Typography variant="h5" color="white" className="mt-12 font-bold">
              Subscribe to our newsletter
            </Typography>

            <div className="flex items-center w-full max-w-md gap-3 mt-6">
              <input
                class=" h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Email Address"
              />
              <Button variant="contained" size="large" className="capitalize">
                Subscribe
              </Button>
            </div>

            <div className="max-w-md w-full">
              <Typography variant="caption" className="mt-6 " color="white">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </Typography>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-16">
            {footerLink.map((footer, i) => (
              <div key={i}>
                <div>
                  <Typography
                    variant="subtitle1 "
                    className="font-semibold text-light-blue"
                  >
                    {footer.title}
                  </Typography>

                  <div className="border-light-blue border-b-2 w-full mb-6 mt-2" />
                </div>

                <ul className={`flex flex-col items-left mt-4 gap-5`}>
                  {footer.links.map((link, i) => (
                    <li key={i}>
                      <NavLink
                        className={`text-white rounded md:bg-transparent `}
                        {...link}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" container flex items-center justify-between   gap-3 mt-6">
          <Typography variant="caption" className="mt-6 " color="white">
            © 2022 Fainzy Technology
          </Typography>
          <div className="flex items-center justify-between   gap-3 ">
            <Typography variant="caption" className="mt-6 " color="white">
              Privacy
            </Typography>
            <Typography variant="caption" className="mt-6 " color="white">
              Terms
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

const footerLink = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", to: "/" },
      { name: "About us", to: "/" },
      { name: "Products", to: "/" },
      { name: "Careers", to: "/" },
      { name: "Contact us", to: "/" },
    ],
  },
  {
    title: "Business Account",
    links: [
      { name: "My Subscription", to: "/" },
      { name: "Profile", to: "/" },
    ],
  },
];
