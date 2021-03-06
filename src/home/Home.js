import { Button, TextField, Typography } from "@mui/material";
import ContainerSection from "common/ContainerSection";
import React from "react";
import { ReactComponent as Circle } from "assets/svgs/circle-eclipse.svg";
import { ReactComponent as ArrowDown } from "assets/svgs/arrow-down.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import WebsiteAPI from "api/WebsiteAPI";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 5000,
    // cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };
  const { t } = useTranslation(["home", "common"]);

  const { isLoading, isError, data } = WebsiteAPI.useContentQuery();
  console.log("data", data, isLoading, isError);

  return (
    <ContainerSection whiteNavbar>
      <header
        style={{
          background: "linear-gradient(180deg, #3973CA 0%, #081F60 100%)",
        }}
        className=" w-full min-h-screen relative flex justify-center items-end"
      >
        <Circle className="hidden md:block absolute left-0" />
        <div className="container grid grid-cols-1 md:grid-cols-2 items-end py-[100px] md:flex-row flex-col z-10 px-5 md:px-2">
          <div className="flex gap-2 md:flex-row flex-col">
            <div className="max-w-xl">
              <Typography variant="h1" color="white" className="font-bold">
                PIONEERING
              </Typography>
              <Typography variant="h1" className="text-primary-light font-bold">
                THE NEW NORMAL
              </Typography>
              <Typography
                variant="body-1"
                className="text-gray-100 mt-10  block"
              >
                {t(
                  "At Fainzy Technologies, we are committed to being the frontliners of technological development that improves lives and creates ease."
                )}
              </Typography>
              <Button
                className="capitalize font-semibold mt-16"
                disableElevation
                variant="contained"
                size="large"
                style={{ padding: "11px 22px" }}
              >
                Our Products & Services
              </Button>

              <div
                className="mt-24 cursor-pointer flex items-center"
                color="white"
              >
                <ArrowDown />
                <Typography
                  variant="caption"
                  color="white"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  Scroll down
                </Typography>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1655995148/C6_05_May_2022_004.305_s1nvwv.png"
                className="pr"
                alt="Robot"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1655838260/C2_Zi_boT_003.328_arby0v.png"
                className=""
                alt="Robot"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1655997323/C5_foodiy_Bot_006.112_cy7q8a.png"
                className=""
                alt="Robot"
              />
            </div>
          </Slider>
        </div>
      </header>

      {/* start about us */}
      <section className="w-full min-h-screen relative flex items-center">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="flex flex items-center flex-col justify-center ">
            <div className=" max-w-sm text-center">
              <Typography variant="h2" className="text-light-blue">
                About Us
              </Typography>
              <Typography variant="body1" className="mt-5 text-gray-400">
                Fainzy Technologies is an all-encompassing Technological
                company, built around the idea and principle of making life
                easier for humans
              </Typography>
            </div>
            <Link to="/about">
              <Button
                className="mt-8 font-semibold max-w-xs"
                variant="contained"
                size="small"
                style={{ padding: "10px 20px" }}
              >
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="flex justify-center order-2 md:order-1 mt-5 md:mt-0">
                <div className="max-w-md">
                  <Typography variant="h2">
                    We believe living can be more efficient with the right
                    technology
                  </Typography>
                  <Typography variant="body1" className="mt-5 text-gray-400">
                    At Fainzy Technologies, we implement forward thinking and
                    innovation to meet human needs and deliver ease.
                  </Typography>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1648560918/unsplash_ZPeXrWxOjRQ_jrcbcr.png"
                  alt="Robot2"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about us */}

      {/* start what we offer */}
      <section
        className="w-full min-h-screen relative flex items-center"
        id="products"
      >
        <div className="w-full my-24">
          <div className="flex justify-center">
            <div className=" max-w-sm text-center">
              <Typography variant="h2" className="text-light-blue">
                What We Offer
              </Typography>
              <Typography variant="body1" className="mt-5 text-gray-400">
                Our Amazing Services and Products
              </Typography>
            </div>
          </div>

          <div className="mt-[100px] bg-black py-5">
            <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
              <div className=" py-[100px]  px-3 md:px-0  flex justify-center order-2  md:order-1 mt-5 md:mt-0">
                <div className="max-w-md">
                  <Typography variant="h2" className="text-white">
                    Efficient Food Ordering System
                  </Typography>
                  <Typography variant="body1" className="mt-5 text-gray-400">
                    Our Food Ordering System brings restaurants and consumers
                    together on one application, where consumers can order food
                    from restaurants they love, and have their food delivered to
                    their location by our robot.
                  </Typography>
                  <Link to="/products/1">
                    <Button
                      className="mt-8 font-semibold max-w-xs"
                      variant="contained"
                      size="large"
                      fullWidth
                      style={{ padding: "11px 22px" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center relative h-full">
                <img
                  src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1649352130/Group_75_deg68u.png"
                  alt="Robot2"
                  className="w-full relative md:absolute top-0 max-w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end what we offer */}

      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="my-[50px] py-5">
            <div className="flex justify-center">
              <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex justify-center order-2 mt-5 md:mt-0">
                  <div className="max-w-md">
                    <Typography variant="h2">
                      Last Mile Delivery Robot System
                    </Typography>
                    <Typography variant="body1" className="mt-5 text-gray-400">
                      The Last Mile Delivery System uses our robot to take food
                      deliveries from restaurants to consumers' locations.{" "}
                    </Typography>
                    <Link to="/products/2">
                      <Button
                        className="mt-8 font-semibold max-w-xs"
                        variant="contained"
                        size="large"
                        fullWidth
                        style={{ padding: "11px 22px" }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="order-1 flex justify-center">
                  <img
                    src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1649197229/Layer_0_2_h8xz0d.png"
                    alt="Robot2"
                    className="w-full max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative flex items-center">
        <div className="w-full md:px-0 my-24">
          <div className="my-[100px] bg-black py-5">
            <div className="container py-24 px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="flex justify-center mt-5 md:mt-0">
                <div className="max-w-md">
                  <Typography variant="h2" className="text-white">
                    Restaurant Robot Delivery System
                  </Typography>
                  <Typography variant="body1" className="mt-5 text-gray-400">
                    Our in-restaurant delivery robot, designed to limit physical
                    contact between restaurant staff and sit-in consumers, makes
                    the rounds in restaurants, receiving orders from consumers
                    through a tablet and returning the same order to the
                    consumers as they are seated in the restaurant.
                  </Typography>
                  <Link to="/products/3">
                    <Button
                      className="mt-8 font-semibold max-w-xs"
                      variant="contained"
                      size="large"
                      fullWidth
                      style={{ padding: "11px 22px" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative h-full">
                <img
                  src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1649352045/Group_74_lt5tpo.png"
                  alt="Robot2"
                  className="w-full md:absolute bottom-0 max-w-[450px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="my-[50px] py-5">
            <div className="flex justify-center">
              <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex justify-center mt-5 md:mt-0">
                  <div className="max-w-md">
                    <Typography variant="h2">Demand Forecast System</Typography>
                    <Typography variant="body1" className="mt-5 text-gray-400">
                      As consumer behaviour information is of great value to
                      businesses, this Demand Forecast System was created as a
                      solution, to aid in determining consumer patterns in terms
                      of demand. With this system, restaurants are able to
                      predict demand patterns and structure their operations
                      accordingly.
                    </Typography>
                    <Link to="/products/4">
                      <Button
                        className="mt-8 font-semibold max-w-xs"
                        variant="contained"
                        size="large"
                        fullWidth
                        style={{ padding: "11px 22px" }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                <div>
                  <img
                    src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1649351712/image_18_ttymbx.png"
                    alt="Robot2"
                    className="w-full max-w-[550px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="flex justify-center">
            <div className=" max-w-sm text-center">
              <Typography variant="h2" className="text-light-blue">
                We'll keep making impact...
              </Typography>
            </div>
          </div>
          <div className="my-[50px] py-5">
            <div className="flex justify-center">
              <div className="container max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
                  {impacts.map((impact, i) => (
                    <div className="flex flex-col gap-2 px-6 items-center justify-center shadow-md rounded-3xl py-10 h-full ">
                      <img
                        src={impact.icon}
                        alt={impact.stats}
                        className="w-full max-w-[50px]"
                      />
                      <Typography variant="h3">{impact.stats}</Typography>
                      <Typography
                        variant="body2 "
                        className="text-gray-500 text-center"
                      >
                        {impact.name}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-20">
          <div className="my-[50px] py-5">
            <div className="flex justify-center">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
                  <div>
                    <div className="flex">
                      <div className="max-w-2xl">
                        <Typography variant="h2" className="text-light-blue">
                          Frequently asked questions
                        </Typography>

                        <div className="mt-10 ">
                          {faqs.map((faq, i) => (
                            <div key={i} className="shadow-lg rounded-lg mt-5">
                              <Accordion elevation={0}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>{faq.answer}</Typography>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-2xl">
                    <Typography variant="h3" className=" mt-10 ">
                      Haven't found the right help?
                    </Typography>
                    <div className="grid grid-cols-1 mt-5 gap-2">
                      <TextField fullWidth label="Name" />
                      <TextField fullWidth label="Email" />
                      <TextField fullWidth label="Subject" />
                      <TextField
                        fullWidth
                        label="Enter Your Message Here."
                        multiline
                        rows={3}
                      />
                      <div>
                        <Button variant="contained" size="large">
                          Submit Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                className="container py-24 px-10 rounded-xl grid grid-cols-1 md:grid-cols-2 items-center"
              >
                <div className="flex justify-center order-2 mt-5 md:mt-0">
                  <div className="max-w-md">
                    <Typography variant="h2" className="text-white">
                      Take your business to the next level?
                    </Typography>

                    <Button
                      className="m-2 font-semibold  text-gray-800 bg-white"
                      variant="contained"
                      //   color="white"
                      size="large"
                      style={{ padding: "11px 22px" }}
                    >
                      Contact Us
                    </Button>
                    <Button
                      className="m-2 font-semibold    "
                      variant="contained"
                      //   color="white"
                      size="large"
                      style={{ padding: "11px 22px", color: "white" }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>

                <div className="order-1 relative h-full">
                  <img
                    src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1649352180/Group_76_xrmrfh.png"
                    alt="Robot2"
                    className="w-full md:absolute bottom-0 max-w-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0">
          <div className="my-[50px] py-5">
            <div className="flex justify-center">
              <div className="container">
                <Typography className="text-center" variant="h3">
                  Brand that trust us
                </Typography>

                <div className="flex gap-4 overflow-x-scroll mt-10">
                  {partners.map((partner, i) => (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full max-w-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerSection>
  );
}

const impacts = [
  {
    name: "Robots in active service",
    stats: "240+",
    icon: "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649337443/Vector_g8dvlz.svg",
  },
  {
    name: "Restaurants using the robot delivery system",
    stats: "122+",
    icon: "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649337443/ri_hotel-fill_yranxq.svg",
  },
  {
    name: "Hotels using the robot delivery system",
    stats: "14+",
    icon: "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649337443/Vector_g8dvlz.svg",
  },
  {
    name: "Robots in active service",
    stats: "240+",
    icon: "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649337443/ri_hotel-fill_yranxq.svg",
  },
  {
    name: "Robots in active service",
    stats: "240+",
    icon: "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649337443/Vector_g8dvlz.svg",
  },
  {
    name: "Robots in active service",
    stats: "240+",
    icon: "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649337443/Vector_g8dvlz.svg",
  },
];

const faqs = [
  {
    question: "Accordion 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Accordion 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Accordion 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Accordion 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const partners = [
  {
    name: "Nagoya University",
    logo: "https://res.cloudinary.com/fainzy-technologies/image/upload/v1655987686/nagoya-u_ydwlpd.png",
  },
];
