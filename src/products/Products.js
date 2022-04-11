import { Button, Rating, Typography } from "@mui/material";
import ContainerSection from "common/ContainerSection";
import React from "react";
import ProductDetailSlider from "./ProductDetailSlider";

export default function Products() {
  return (
    <ContainerSection>
      <header className=" w-full min-h-screen relative flex justify-center items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-[100px] md:flex-row flex-col z-10 px-5 md:px-2">
          <div>
            <div className="max-h-lg">
              <ProductDetailSlider products={PRODUCTS_IMAGE_ARRAY} />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md">
              <Typography variant="h3">
                Restaurant Delivery Robot System
              </Typography>

              <div className="flex gap-2 items-end">
                <Rating
                  size="small"
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="body2" className="text-gray-400">
                  {" "}
                  (11.78kreviews)
                </Typography>
              </div>

              <div className="mt-5 flex gap-2 ">
                <Typography variant="h5" className="text-gray-400 mr-2">
                  $24,943
                </Typography>{" "}
                <Typography variant="h5">$24,943</Typography>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                <div className="flex justify-between gap-2 items-center">
                  <Typography variant="subtitle1">Color</Typography>
                  <div></div>
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <Typography variant="subtitle1">Size</Typography>
                  <div>
                    <select
                      id="countries"
                      className="border subtitle2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-200 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                    </select>
                    <Typography variant="h7" className="underline mt-2">
                      Size Chart
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <Typography variant="subtitle1">Quantity</Typography>
                  <></>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-10">
                <Button
                  variant="contained"
                  size="large"
                  className="bg-green-600 font-semibold"
                  disableElevation
                  fullWidth
                >
                  Added To Cart
                </Button>
                <Button
                  variant="contained"
                  className="col-span-2 font-semibold"
                  size="large"
                  disableElevation
                  fullWidth
                >
                  Added To Cart
                </Button>
              </div>

              <Button
                variant="contained"
                size="large"
                disableElevation
                className="text-black bg-gray-300 mt-5 font-semibold"
                fullWidth
              >
                Added To Cart
              </Button>
            </div>
          </div>
        </div>
      </header>
    </ContainerSection>
  );
}

const PRODUCTS_IMAGE_ARRAY = [
  "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649235689/headerImage_coel8n.png",
  "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649197229/Layer_0_2_h8xz0d.png",
  "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649235689/headerImage_coel8n.png",
  "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649197108/restuarant_robot_1_1_ds6125.png",
];
