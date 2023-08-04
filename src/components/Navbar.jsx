import React from "react";
import { logo, down_arrow, search, avatar, cart } from "../assets";

const Navbar = () => {
	return (
		<div className="h-[88px] w-full flex justify-around">
			<div className="flex items-center hover:cursor-pointer">
				<img src={logo} alt="logo.png" className="w-[44px] h-[48px]" />
				<h1 className="text-[22px] text-[#003d2a] font-semibold">Shopcart</h1>
			</div>

			<div className="flex gap-x-[35px] items-center mr-10 ">
				<div className="flex">
					<select className="w-26 h-7 text-[17px] text-[#003d2a] font-semibold outline-none appearance-none hover:underline hover:cursor-pointer">
						<option>Categories</option>
						<option>Hindi</option>
						<option>Spanish</option>
						<option>Japanese</option>
					</select>
					<img src={down_arrow} alt="" className="h-4 w-4 mt-2 ml-1" />
				</div>
				<a href="/" className="text-[17px] font-semibold text-[#003d2a]">
					Deals
				</a>
				<a href="/" className="text-[17px] font-semibold text-[#003d2a]">
					What's New
				</a>
				<a href="/" className="text-[17px] font-semibold text-[#003d2a]">
					Delivery
				</a>
			</div>

			<div className="flex items-center">
				<input type="text" placeholder="Search Product" className="w-[250px] h-7 p-2 font-semibold" />
				<img src={search} alt="search icon" className="w-[18px] h-[18px] ml-3 hover:cursor-pointer" />
			</div>

			<div className="flex items-center gap-x-10 mr-10">
				<div className="flex gap-x-2 hover:cursor-pointer">
					<img src={avatar} alt="" className="w-[20px] h-[20px]" />
					<p className="text-[17px] font-semibold text-[#003d2a]">Account</p>
				</div>
				<div className="flex gap-x-2 hover:cursor-pointer">
					<img src={cart} alt="" className="w-[20px] h-[20px]" />
					<p className="text-[17px] font-semibold text-[#003d2a]">Cart</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
