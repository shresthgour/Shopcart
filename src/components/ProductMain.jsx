import React, { useState } from "react";
import Navbar from "./Navbar";
import { star, package_box, truck } from "../assets";
import Footer from "./Footer";


const ProductMain = ({}) => {


	// title, price, description, thumbnail
	// Orange - #ff7a19

	let title = "iPhone X";
	let price = "899";
	let description = "The iPhone X, released in 2017, featured a bezel-less 5.8-inch Super Retina OLED display, Face ID for secure authentication, powerful A11 Bionic chip, dual-camera system, premium glass design, and wireless charging. It redefined flagship smartphones and captivated users worldwide.";
	let thumbnail = "https://i.dummyjson.com/data/products/2/thumbnail.jpg";
	let images = [
		"https://i.dummyjson.com/data/products/2/1.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg",
    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
	];

	const MAX_IMAGES = 4;
	const [selectedImage, setSelectedImage] = useState(thumbnail);

	const firstFourImages = images.slice(0, MAX_IMAGES);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	return (
		<> 
			<Navbar />

			<div className="pl-14 pt-6">
				<h4 className="text-gray-500 text-sm">
					Electronics / Audio / Headphones / Shop Headphones by type /{" "}
					<span className="font-bold text-black">{title}</span>
				</h4>
			</div>

			<div className="w-full justify-around items-center flex mt-5">
				<div className="w-[40%] flex flex-col justify-center pt-10">
					<div className="h-[70vh]">
						<img src={selectedImage} alt="" className="h-[60vh]"/>
					</div>
					<div className="flex gap-x-5 pt-10">
						{firstFourImages.map((image, index) => (
							<div
								key={index}
								className="w-[121px] h-[121px] hover:cursor-pointer"
								onClick={() => handleImageClick(image)}>
								<img
									src={image}
									alt={`Image ${index + 1}`}
									className="w-[121px] h-[121px]"
								/>
							</div>
						))}
					</div>
				</div>

				<div className="w-[40%]">
					<h2 className="text-4xl font-bold">{title}</h2>

					<div className="w-[70%] pt-3">
						<p className="text-gray-600 text-sm">{description}</p>
					</div>

					<div className="flex gap-x-1 pt-3">
						<img src={star} alt="star" className="w-3" />
						<img src={star} alt="star" className="w-3" />
						<img src={star} alt="star" className="w-3" />
						<img src={star} alt="star" className="w-3" />
						<img src={star} alt="star" className="w-3" />
						<p className="text-[10px] ml-1">(121)</p>
					</div>

					<div className="pt-12">
						<p className="font-bold text-2xl">${price}.00 or 99.99/month</p>
						<p className="text-gray-600 text-sm pt-3">
							Suggested payments with 6 months special financing
						</p>
					</div>

					<div className="pt-10">
						<div className="">
							<p className="font-bold text-xl">Choose a color</p>
						</div>
						<div className="flex gap-x-5 pt-5">
							<div className="rounded-full h-10 w-10 overflow-hidden hover:cursor-pointer">
								<div className="h-5 w-full bg-red-800"></div>
								<div className="h-5 w-full bg-red-400"></div>
							</div>
							<div className="rounded-full h-10 w-10 overflow-hidden hover:cursor-pointer">
								<div className="h-5 w-full bg-gray-800"></div>
								<div className="h-5 w-full bg-gray-400"></div>
							</div>
							<div className="rounded-full h-10 w-10 overflow-hidden hover:cursor-pointer">
								<div className="h-5 w-full bg-green-300"></div>
								<div className="h-5 w-full bg-white"></div>
							</div>
							<div className="rounded-full h-10 w-10 overflow-hidden hover:cursor-pointer">
								<div className="h-5 w-full bg-white"></div>
								<div className="h-5 w-full bg-gray-400"></div>
							</div>
							<div className="rounded-full h-10 w-10 overflow-hidden hover:cursor-pointer">
								<div className="h-5 w-full bg-blue-800"></div>
								<div className="h-5 w-full bg-blue-400"></div>
							</div>
						</div>
					</div>

					<div className="pt-12">
						<div className="flex gap-x-10">
							<div className="flex gap-x-8 items-center pl-6">
								<button className="text-[#003d2a] text-2xl ">-</button>
								<p className="text-[#003d2a] text-xl">1</p>
								<button className="text-[#003d2a] text-2xl ">+</button>
							</div>
							<div className="">
								<p className="text-sm font-semibold text-gray-600">
									Only <span className="text-[#ff7a19]">12 items</span> Left!{" "}
									<br />
									Don't miss it
								</p>
							</div>
						</div>

						<div className="pt-6">
							<button className="text-center w-48 h-[50px] text-white bg-[#003d2a] rounded-3xl text-base hover:border-2 hover:bg-white hover:text-black hover:border-black hover:font-bold transition delay-75">
								Buy Now
							</button>
							<button className="text-center w-48 h-[50px] hover:text-white hover:bg-[#003d2a] rounded-3xl text-base border-2 bg-white text-black border-black font-bold transition delay-75 ml-4">
								Add to Cart
							</button>
						</div>
					</div>

					<div className="pt-10">
						<div className="">
							<div className="flex">
								<img src={truck} alt="truck" className="w-5" />
								<p className="font-semibold pl-2">Free Delivery</p>
							</div>
							<div className="pt-1 pl-7">
								<p className="text-xs text-gray-500 underline">
									Enter your postal code for Delivery Availability
								</p>
							</div>
						</div>
						<div className="pt-10">
							<div className="flex">
								<img src={package_box} alt="package_box" className="w-5" />
								<p className="font-semibold pl-2">Return Delivery</p>
							</div>
							<div className="pt-1 pl-7">
								<p className="text-xs text-gray-500 ">
									Free 30 days Delivery Returns.{" "}
									<span className="underline">Details</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default ProductMain;
