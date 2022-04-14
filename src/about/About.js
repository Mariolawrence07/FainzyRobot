import { Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ContainerSection from "common/ContainerSection";
import React from "react";


const About = () => {
  return (
    <ContainerSection whiteNavbar>
      <header
        style={{
          background: "#3973CA",
          height: "60vh",
        }}
        className="w-full  relative flex justify-center items-center"
      >
        <div className="text-center">
          <Typography variant="h1" color="white" className="font-bold">
            About Us
          </Typography>
          <Typography variant="body1" color="white" className="font-bold">
            All you need to know about us
          </Typography>
        </div>
      </header>
      <section className="w-full relative flex items-center">
        <div className="container mx-auto  px-4 min-h-screen  flex justify-between flex-wrap items-center">
          <div>
            <img
              src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1649797763/mwdmdxey3dku5zyqbek4.png"
              alt="aboutpng"
              className="w-full"
            />
          </div>
          <div className="max-w-md ">
            <Typography variant="h2">About Fainzy</Typography>
            <Typography variant="body1" className="mt-5 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              varius faucibus malesuada aenean elementum. In proin nibh aliquet
              penatibus odio lobortis. Tincidunt amet imperdiet nunc facilisis
              lorem at tortor etiam. Enim nunc venenatis ut pulvinar eget id
              cursus venenatis integer.
            </Typography>
            <Button
              className="mt-8 font-semibold max-w-xs"
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
              size="large"
              style={{ padding: "11px 22px" }}
            >
              See Products
            </Button>
          </div>
        </div>
      </section>
      {/* start team */}
      <section className="w-full   ">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="flex flex items-center flex-col justify-center ">
            <div className=" max-w-lg text-center">
              <Typography variant="body1" className="mt-5 text-gray-400">
                Dream team
              </Typography>
              <Typography variant="h2" className="text-light-blue">
                Great team is the key
              </Typography>
              <Typography variant="body1" className="mt-5 text-gray-400">
                Minimal will provide you support if you have any problems, our
                support team will reply within a day and we also have detailed
                documentation.
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full relative flex justify-center flex-wrap items-center">
          {Teams.map((team, i) => (
            <div className="mr-5 text-center">
              <img src={team.image} alt={team.name} />
              <Typography variant="h6">{team.name}</Typography>
              <Typography variant="body1">{team.position}</Typography>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="my-[100px] py-5">
            <div className="flex justify-center">
              <div
                style={{
                  background:
                    " linear-gradient(180deg, #3973CA 0%, #081F60 100%)",
                }}
                className="container  py-24 px-10 rounded-xl grid grid-cols-1  content-center items-center"
              >
                <div className=" w-full flex justify-center  items-center">
                  <div className="max-w-sm w-full flex justify-center  items-center flex-col ">

                 
                  <Typography variant="h2" className="text-white text-center">
                    Let’s do great things together
                  </Typography>

                  <Button
                    className="mt-8 font-semibold  items-center  text-gray-800 bg-white"
                    variant="contained"
                    //   color="white"
                    size="large"
                    style={{ padding: "11px 22px" }}
                  >
                    Get In Touch
                  </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerSection>
  );
};

const Teams = [
  {
    id: 1,
    name: "Eleanor Pena",
    position: "UI Designer",
    image:
      "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649935691/avatar-1_qdfde6.jpg",
  },
  {
    id: 2,
    name: "Eleanor Pena",
    position: "UI Designer",
    image:
      "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649935691/avatar-1_qdfde6.jpg",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    position: "UI Designer",
    image:
      "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649935691/avatar-1_qdfde6.jpg",
  },
  {
    id: 4,
    name: "Eleanor Pena",
    position: "UI Designer",
    image:
      "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649935691/avatar-1_qdfde6.jpg",
  },
];

export default About;
