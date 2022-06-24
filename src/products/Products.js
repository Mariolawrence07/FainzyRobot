import { Button, Rating, Typography } from "@mui/material";
import ContainerSection from "common/ContainerSection";
import React from "react";
import { Link } from "react-router-dom";
// import ProductDetailSlider from "./ProductDetailSlider";
import { useParams } from "react-router-dom";
// import Iframe from "react-iframe";

export default function Products() {
  const { id } = useParams();
  console.log("id", id);
  const thisProduct = productDetails.find(
    (prod) => parseInt(prod.id) === parseInt(id)
  );
  console.log("id", id, thisProduct, productDetails);

  return (
    <ContainerSection>
      <header className=" w-full relative flex justify-center items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-[100px] md:flex-row flex-col z-10 px-5 md:px-2">
          <div>
            <div className="max-h-lg">
              <img src={thisProduct.Image} />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md">
              <Typography variant="h3">{thisProduct?.name}</Typography>

              <div className="flex gap-2 items-end">
                <Rating
                  size="small"
                  name="half-rating-read"
                  defaultValue={thisProduct.rating}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="body2" className="text-gray-400">
                  {" "}
                  {thisProduct.reviews}
                </Typography>
              </div>

              <div className="mt-5 flex gap-2 ">
                <Typography variant="h5" className="text-gray-400 mr-2">
                  {thisProduct.originalPrice}
                </Typography>{" "}
                <Typography variant="h5">
                  {thisProduct.discountedPrice}
                </Typography>
              </div>

              {/* <div className="mt-8 flex flex-col gap-5">
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
              </div> */}

              {/* <div className="grid grid-cols-3 gap-3 mt-10">
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
              </div> */}
              <Link to="/contact-us">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  className="text-black bg-gray-300 mt-5 font-semibold"
                  fullWidth
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="flex flex items-center flex-col justify-center ">
            <div className=" max-w-xl text-center">
              <Typography variant="h3" className="">
                Product Description
              </Typography>
              <Typography variant="body1" className="mt-5 text-gray-400">
                {thisProduct.description}
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative flex items-center ">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="flex justify-center   ">
            <div className="container  ">
              <Typography variant="h3" className="mb-10">
                Technical Specification
              </Typography>
              <div className="mb-4">
                <Typography variant="h6" className="">
                  Maximum Speed
                </Typography>
                <Typography variant="body2" className="">
                  6 km/h
                </Typography>
              </div>
              <div className="mb-4">
                <Typography variant="h6" className="">
                  Robot Dimensions
                </Typography>
                <Typography variant="body2" className="">
                  697 (L) x 569 (W) x 571 (H) mm (without flag)
                </Typography>
              </div>
              <div className="mb-4">
                <Typography variant="h6" className="">
                  Cargo box dimensions
                </Typography>
                <Typography variant="body2" className="">
                  697 (L) x 569 (W) x 571 (H) mm (without flag)
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative flex items-center">
        <div className="w-full px-5 md:px-0 my-24">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="flex justify-center order-2 md:order-1 mt-5 md:mt-0">
                <div className="max-w-md">
                  <Typography variant="h2">
                    We think everything can be a lot easier! the
                  </Typography>
                  <Typography variant="body1" className="mt-5 text-gray-400">
                    At Fainzy Technologies, we are committed to Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Tristique
                    suscipit sem laoreet sagittis, id.
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
      <section
        className="w-ful pt-6 flex flex items-center flex-col justify-center"
        style={{ backgroundColor: "#161C24" }}
      >
        <div className="w-full px-5 md:px-0 ">
          <div className="flex flex items-center flex-col justify-center mt-10 ">
            <div className=" max-w-sm text-center">
              <Typography variant="h2" className="text-white">
                Some Benefits
              </Typography>
              <Typography variant="body1" className="mb-10 text-gray-400">
                At Fainzy Technologies, we are committed to
              </Typography>
            </div>
          </div>
          <div
            className=" container flex justify-evenly flex-wrap    py-8 mb-24"
            style={{ margin: "auto", color: "white" }}
          >
            <div className="max-w-xs">
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1654507614/Vector_ytjffe.svg"
                alt="icon"
                className="my-4"
              />

              <Typography className="h3 font-bold">Cost Saving</Typography>
              <Typography className="body1 my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tempus amet, in congue faucibus vitae odio potenti. Vel feugiat
                eget{" "}
              </Typography>
            </div>
            <div className="max-w-xs">
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1654507614/Vector_ytjffe.svg"
                alt="icon"
                className="my-4"
              />

              <Typography className="h3 font-bold">Time Saving</Typography>
              <Typography className="body1 my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tempus amet, in congue faucibus vitae odio potenti. Vel feugiat
                eget{" "}
              </Typography>
            </div>
            <div className="max-w-xs">
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1654507614/Vector_ytjffe.svg"
                alt="icon"
                className="my-4"
              />

              <Typography className="h3 font-bold">Green Technology</Typography>
              <Typography className="body1 my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tempus amet, in congue faucibus vitae odio potenti. Vel feugiat
                eget{" "}
              </Typography>
            </div>
            <div className="max-w-xs">
              <img
                src="https://res.cloudinary.com/fainzy-technologies/image/upload/v1654507614/Vector_ytjffe.svg"
                alt="icon"
                className="my-4"
              />

              <Typography className="h3 font-bold">
                Contactless delivery
              </Typography>
              <Typography className="body1 my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tempus amet, in congue faucibus vitae odio potenti. Vel feugiat
                eget{" "}
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className="w-ful pt-6 flex flex items-center flex-col justify-center my-20">
        <div className="w-full px-5 md:px-0 ">
          <div className="flex flex items-center flex-col justify-center mt-10 ">
            <div className=" max-w-sm text-center">
              <Typography variant="h2" className="my-4">
                How to use
              </Typography>
              <Typography variant="body1" className="mb-10 text-gray-400">
                Watch the video below for a clear demonstration of how the
                product works.
              </Typography>
            </div>
          </div>
          <div
            className="container"
            style={{ margin: "auto", borderRadius: "24px" }}
          >
            <iframe
              src={thisProduct.video}
              width="100%"
              height="500px"
              style={{ border: "10px solid red", borderRadius: "50px;" }}
            />
          </div>
        </div>
      </section>
    </ContainerSection>
  );
}

// const PRODUCTS_IMAGE_ARRAY = [
//   "https://res.cloudinary.com/fainzy-technologies/image/upload/v1655913845/Mira_new_concept_C4_C5_sample_006.316_gbapaw.png",
//   "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649235689/headerImage_coel8n.png",
//   "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649197229/Layer_0_2_h8xz0d.png",
//   "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649235689/headerImage_coel8n.png",
//   "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649197108/restuarant_robot_1_1_ds6125.png",
// ];

const productDetails = [
  {
    id: 1,
    name: "Efficient Food Ordering System",
    originalPrice: "$28,000",
    discountedPrice: "$24,943",
    description:
      "At Fainzy Technologies, we are committed to Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Tristique suscipit sem laoreet sagittis, id.",
    rating: 2.5,
    reviews: "11.5k",
    video: "https://www.youtube.com/watch?v=2nnSn5bGvDs",
    Image: "",
  },
  {
    id: 2,
    name: " Last Mile Delivery Robot System",
    originalPrice: "$28,000",
    discountedPrice: "$24,943",
    description:
      "At Fainzy Technologies, we are committed to Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Tristique suscipit sem laoreet sagittis, id.",
    rating: 3,
    reviews: "(11.5k)",
    Image:
      "https://res.cloudinary.com/fainzy-technologies/image/upload/v1649197229/Layer_0_2_h8xz0d.png",
  },
  {
    id: 3,
    name: "Restaurant Robot Delivery System",
    originalPrice: "$28,000",
    discountedPrice: "$24,943",
    description:
      "At Fainzy Technologies, we are committed to Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Tristique suscipit sem laoreet sagittis, id.",
    rating: 3,
    reviews: "(11.5k)",
    Image:
      "https://res.cloudinary.com/fainzy-technologies/image/upload/v1655915586/Mira_new_concept_C4_C5_sample_006_1_m30prr.png",
  },
  {
    id: 4,
    name: "Demand Forecast System",
    originalPrice: "$28,000",
    discountedPrice: "$24,943",
    description:
      "At Fainzy Technologies, we are committed to Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Tristique suscipit sem laoreet sagittis, id.",
    rating: 3,
    reviews: "(11.5k)",
    Image: "",
  },
];
