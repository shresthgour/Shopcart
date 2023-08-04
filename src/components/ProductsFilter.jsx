import React from "react";
import { down_arrow } from "../assets";

const ProductsFilter = () => {
	return (
		<div className="h-[110px] mt-10 mb-10 flex justify-around">
			<div className="flex gap-x-10">
				<div className="flex">
					<select className="w-26 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:text-lg hover:cursor-pointer">
						<option>Headphone Type</option>
						<option>Wired</option>
						<option>Bluetooth</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>

				<div className="flex">
					<select className="w-11 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:text-lg hover:cursor-pointer">
						<option>Price</option>
						<option>$100 - $500</option>
						<option>$500 - $1000</option>
						<option>$1000 - more</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>

				<div className="flex">
					<select className="w-16 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:text-lg hover:cursor-pointer">
						<option>Review</option>
						<option>Review1</option>
						<option>Review2</option>
						<option>Review3</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>

				<div className="flex">
					<select className="w-12 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:text-lg hover:cursor-pointer">
						<option>Color</option>
						<option>Red</option>
						<option>Blue</option>
						<option>White</option>
						<option>Black</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>

				<div className="flex">
					<select className="w-20 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:text-lg hover:cursor-pointer">
						<option>Material</option>
						<option>Metal</option>
						<option>Plastic</option>
						<option>Rubber</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>

				<div className="flex">
					<select className="w-12 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:text-lg hover:cursor-pointer">
						<option>Offer</option>
						<option>upto 10% off</option>
						<option>upto 20% off</option>
						<option>upto 30% off</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>

				<div className="flex">
					<select className="w-26 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:text-lg hover:cursor-pointer">
						<option>All Filters</option>
						<option>Filter1</option>
						<option>Filter2</option>
						<option>Filter3</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>
			</div>
      
      <div className="">
        <div className="flex">
					<select className="w-16 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:text-lg hover:cursor-pointer">
						<option>Sort by</option>
						<option>Price</option>
						<option>Name</option>
						<option>Availability</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>
      </div>
		</div>
	);
};

export default ProductsFilter;
