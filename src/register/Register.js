import { Button, TextField, Typography } from "@mui/material";
import ContainerSection from "common/ContainerSection";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <ContainerSection>
      {" "}
      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-20">
          <div className="my-[50px] py-5">
            <div className="flex justify-center">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
                  <div>
                    <div className="flex flex-col items-center">
                      <div className="">
                        <img
                          src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1651493565/signIn_q4over.png"
                          alt=""
                        />
                      </div>

                      <Typography
                        className="max-w-xs text-center "
                        variant="h3"
                        color="primary"
                      >
                        Restaurant Delivery Robot System
                      </Typography>

                      <Typography
                        className="max-w-sm text-center"
                        variant="body2"
                      >
                        At Fainzy Technologies, we are committed to Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit.{" "}
                      </Typography>
                    </div>
                  </div>
                  <div className="max-w-2xl flex flex-col">
                    <Typography variant="h3">Create Account</Typography>
                    <div className="grid grid-cols-1 mt-5 gap-2">
                      <div className="grid grid-cols-2 mt-5 gap-2">
                        <TextField type="text" fullWidth label="First Name" />
                        <TextField type="text" fullWidth label="Last Name" />
                      </div>
                      <TextField type="email" fullWidth label="Email" />
                        <TextField type="password" fullWidth label="password" />

                      <div>
                        <Button variant="contained" size="large" fullWidth>
                          Create Account
                        </Button>
                      </div>
                      <Typography variant="body2">
                        Already have an account.{" "}
                        <Link style={{ color: "#3973CA" }} to="/login">
                          SignIn
                        </Link>
                      </Typography>
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

export default Register;
