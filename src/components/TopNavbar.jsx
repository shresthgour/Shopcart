import React from "react";
import { white_phone, white_down_arrow } from "../assets";

const TopNavbar = () => {
	return (
		<div className="bg-[#003d2a] w-full h-[35px] justify-center flex items-center">

			<div className="flex absolute left-16 text-center hover:cursor-pointer ">
				<img src={white_phone} alt="phone_icon" className="h-[20px] w-[20px]" />
				<p className="text-white text-[12px] pl-1 hover:underline">+001234567890</p>
			</div>  

			<div className="hover:cursor-pointer flex">
				<p className="text-white text-[12px] hover:underline">
					Get 50% Off on Selected Items
				</p>
        <p className="text-white text-[12px]">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p>
        <p className="text-white text-[12px] hover:underline">Shop Now</p>
			</div>

			<div className="flex absolute right-16 hover:cursor-pointer">
				<div className="flex hover:cursor-pointer">
					<select className="w-7 bg-[#003d2a] text-[12px] text-white   outline-none appearance-none hover:underline hover:cursor-pointer">
						<option>Eng</option>
						<option>Hindi</option>
						<option>Spanish</option>
						<option>Japanese</option>
					</select>
				  <img src={white_down_arrow} alt="" className="h-4 w-4 mt-1" />
				</div>
				<div className="ml-5">
					<select className="w-14 hover:cursor-pointer bg-[#003d2a] text-white text-[12px] outline-none hover:underline appearance-none">
						<option>Location</option>
						<option>India</option>
						<option>Kyoto</option>
						<option>Las Vegas</option>
					</select>
				</div>
				<img src={white_down_arrow} alt="" className="h-4 w-4 mt-1" />
			</div>
		</div>
	);
};

export default TopNavbar;
