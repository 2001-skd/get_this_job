import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import breiefCaseImg from "../../assets/image/briefcase.png";
import { Link } from "react-router";

const Create_account_form = () => {
  return (
    <section className="flex items-center bg-secondary h-screen overflow-hidden flex-col md:flex-row">
      <div className="left_side bg-primary w-full h-full flex items-center justify-center">
        <div className="left_side_content flex items-center flex-col justify-center">
          <Typography className="font-font-primary md:text-6xl text-3xl p-5 text-center text-wrap text-white">
            Create Account and Come On In
          </Typography>
          <img src={breiefCaseImg} className="md:w-96 w-48 p-3" />
        </div>
      </div>
      <div className="right_side bg-black w-full h-full p-5 md:rounded-tl-xl md:rounded-bl-xl rounded-tl-xl rounded-tr-xl">
        <div className="login flex items-center justify-end gap-4">
          <Typography className="text-xl font-font-primary text-white">
            Already Have an Account ?
          </Typography>
          <Link to="/login">
            <Button className="!bg-transparent border-2 border-white font-font-primary text-white">
              Login
            </Button>
          </Link>
        </div>

        <div className="form_open_panel flex items-center justify-center h-full">
          <div className="logo  flex items-center justify-center flex-col h-full">
            <Typography className="text-white font-font-primary text-center text-6xl">
              Get This Job
            </Typography>

            <div className="buttons flex items-center flex-col justify-center md:gap-5 md:mt-5">
              <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3 text-white font-font-primary text-xl tracking-widest"
              >
                <img
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
                Continue with Google
              </Button>
              <Typography className="text-gray-500 font-font-primary">
                --- OR ---
              </Typography>

              <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="text-white font-font-primary text-xl tracking-widest w-80"
              >
                Continue With Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create_account_form;
