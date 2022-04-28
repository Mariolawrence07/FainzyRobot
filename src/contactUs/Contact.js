import { TextField, Typography } from "@mui/material";
import ContainerSection from "common/ContainerSection";
import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <ContainerSection whiteNavbar>
      <header
        style={{
          background: "linear-gradient(180deg, #3973CA 0%, #081F60 100%)",
          height: "60vh",
        }}
        className="  w-full  flex justify-start  items-center"
      >
        <div className="  w-full mx-auto  container   max-w-md  ">
          <div className=" text-center">
            <Typography variant="h1" color="white" className="font-bold">
              Contact Us
            </Typography>
            <Typography variant="body1" color="white" className="font-bold">
              Get in touch with us anyday anytime
            </Typography>
          </div>
        </div>
      </header>
      <section
        className=""
        style={{
          
        }}
      >
        <div className="flex  justify-center flex-wrap  -mt-20 ">
          <Card className=" m-5">
            <CardContent className="text-center flex  justify-center flex-col flex items-center">
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1650978165/Vector_azwt5z.svg"
                alt=""
              />
              <Typography variant="body2">
                908 Boston Turnpike <br></br> Shrewsbury, MA 01545
              </Typography>
            </CardContent>
          </Card>
          <Card className=" m-5">
            <CardContent className="text-center flex  justify-center flex-col flex items-center">
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1650978165/Vector_azwt5z.svg"
                alt=""
              />
              <Typography variant="body2">
                908 Boston Turnpike <br></br> Shrewsbury, MA 01545
              </Typography>
            </CardContent>
          </Card>
          <Card className=" m-5">
            <CardContent className="text-center flex  justify-center flex-col flex items-center">
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1650978165/Vector_azwt5z.svg"
                alt=""
              />
              <Typography variant="body2">
                908 Boston Turnpike <br></br> Shrewsbury, MA 01545
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-20">
          <div className="my-[50px] py-5">
            <div className="flex justify-center">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-80 items-center justify-center">
                  <div className="max-w-2xl">
                    <Typography variant="h3" className=" mt-10 ">
                      Feel free to contact us. We'll be glad to hear from you,
                      buddy.
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
                  <div>
                    <div className="flex">
                      <div className="max-w-2xl">
                        <img
                          src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1650885800/map_g3z7l3.png"
                          alt="map"
                        />
                      </div>
                    </div>
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

export default Contact;
