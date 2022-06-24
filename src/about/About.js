import { Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ContainerSection from "common/ContainerSection";
import React from "react";

const About = () => {
  return (
    <ContainerSection whiteNavbar>
      <header
        style={{
          background: "linear-gradient(180deg, #3973CA 0%, #081F60 100%)",
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
      <section className="w-full flex justify-center ">
        <div className="container py-24 md:px-0 grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1649797763/mwdmdxey3dku5zyqbek4.png"
              alt="aboutpng"
              className="max-w-xl"
            />
          </div>
          <div className="max-w-2xl ">
            <Typography variant="h2">About Fainzy</Typography>
            <Typography variant="body1" className="mt-5 text-gray-400">
              Founded in 2019 and headquartered in Nagoya, Japan, Fainzy
              Technologies is an all-encompassing Technological company, built
              around the idea and principle of making life easier for humans.
              (break)With our tentacles spread into various areas of technology,
              like robotics, software development, and machine learning
              algorithms, we pride ourselves in being at the fore front of new
              innovations focused on making the day-to-day living experience of
              human beings less tedious, and helping people function more
              efficiently. (break)To this end, our technology marries the
              functionality of distinctive people-serving industries, to create
              solutions that indeed serve people better. (break)We partner with
              creators and innovators from all around the world, to ensure that
              we engage World's Best Practices in delivering solutions. With the
              help of our partners, we have established points of contact in the
              United States, India and Nigeria. (break)Our core team is made up
              of exceedingly talented, highly determined individuals, passionate
              about changing the world and bringing ease to the human existence,
              from Japan to the rest of humankind.
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
              {/* <Typography variant="body1" className="mt-5 text-gray-400">
                Dream team
              </Typography> */}
              <Typography variant="h2" className="text-light-blue">
              Meet The Dream Team!
              </Typography>
              {/* <Typography variant="body1" className="mt-5 text-gray-400">
                Minimal will provide you support if you have any problems, our
                support team will reply within a day and we also have detailed
                documentation.
              </Typography> */}
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
