import { Button, TextField, Typography } from "@mui/material";
import ContainerSection from "common/ContainerSection";
import CareerCards from "./careerCards";

const Career = () => {
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
              Join Our Amazing Team
            </Typography>
            <Typography variant="body1" color="white" className="font-bold">
              Get in touch with us anyday anytime
            </Typography>
          </div>
        </div>
      </header>

      <section className="w-full relative flex items-center">
        <div
          className="container mx-auto  px-4    flex justify-end flex-wrap items-center"
          style={{ minHeight: "60vh" }}
        >
          <div className="max-w-md ">
            <Typography style={{ maxWidth: "19rem" }} variant="h2">
              Life at <span className="text-light-blue">Fainzy Tech</span>
            </Typography>
            <Typography variant="body1" className="mt-5 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              varius faucibus malesuada aenean elementum. In proin nibh aliquet
              penatibus odio lobortis. Tincidunt amet imperdiet nunc facilisis
              lorem at tortor etiam. Enim nunc venenatis ut pulvinar eget id
              cursus venenatis integer.
            </Typography>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto  px-4" style={{ minHeight: "30vh" }}>
          <div className="max-w-md ">
            <Typography variant="h2">Available roles</Typography>
          </div>
          <div className="">
            <CareerCards />
          </div>
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
                        <img src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1650885800/map_g3z7l3.png"
                        alt="map"/>
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

export default Career;
