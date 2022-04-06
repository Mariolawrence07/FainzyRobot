import {Button, Typography} from '@mui/material';
import ContainerSection from 'common/ContainerSection';
import React from 'react';
import {ReactComponent as Circle} from 'assets/svgs/circle-eclipse.svg';
import {ReactComponent as ArrowDown} from 'assets/svgs/arrow-down.svg';

export default function Home () {
  return (
    <ContainerSection whiteNavbar>
      <header
        style={{
          background: 'linear-gradient(180deg, #3973CA 0%, #081F60 100%)',
        }}
        className="h-screen w-full min-h-[750px]  py-[650px] md:py-[100px] relative flex justify-center items-center"
      >
        <Circle className="absolute left-0" />
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center md:flex-row flex-col z-10 px-5 md:px-2">
          <div className="flex gap-2 md:flex-row flex-col">
            <div className="max-w-md">
              <Typography variant="h1" color="white" className="font-bold">
                先駆者
              </Typography>
              <Typography variant="h1" className="text-primary-light font-bold">
                ニューノーマル
              </Typography>
              <Typography
                variant="body-1"
                className="text-gray-100 mt-12  block"
              >
                At Fainzy Technologies, we are committed to building solutions to ease transportant and create automation
              </Typography>
              <Button
                className="capitalize font-semibold mt-16"
                disableElevation
                variant="contained"
                size="large"
                style={{padding: '11px 22px'}}
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
                  style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}
                >
                  Scroll down
                </Typography>
              </div>
            </div>

          </div>

          <div>
            <img
              src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1649235689/headerImage_coel8n.png"
              className="w-full max-w-[600px]"
              alt="Robot"
            />
          </div>

        </div>

      </header>

      <section className="h-screen w-full min-h-[350px] relative max-h-[1000px] flex items-center">
        <div className="w-full px-5 md:px-0">
          <div className="flex justify-center">
            <div className=" max-w-sm text-center">
              <Typography variant="h2" className="text-light-blue">
                About us
              </Typography>
              <Typography variant="body1" className="mt-5 text-gray-400">
                At Fainzy Technologies, we are committed to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique suscipit sem laoreet sagittis, id.
              </Typography>
            </div>
          </div>

          <div className="mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="flex justify-center order-2 md:order-1 mt-5 md:mt-0">
                <div className="max-w-md">
                  <Typography variant="h2">
                    We think everything can be a lot easier! the
                  </Typography>
                  <Typography variant="body1" className="mt-5 text-gray-400">
                    At Fainzy Technologies, we are committed to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique suscipit sem laoreet sagittis, id.
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
    </ContainerSection>
  );
}
