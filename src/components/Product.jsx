import React from "react";
import { star, heart } from "../assets";

const Product = ({ title, price, description, thumbnail }) => {
	return (
		<div className="h-[420px] w-[100%]">
			<div className="h-[280px] w-[100%] flex flex-col justify-center items-center">
				<img src={heart} alt="star" className="w-6 self-end" />
				<img src={thumbnail} alt="main_img" className="h-[250px] w-[250px]" />
			</div>

			<div className="w-[100%] h-[130px] pl-3 pr-3">
				<div className="flex justify-between h-1/4 w-[100%] items-center">
					<h4 className="text-lg font-bold">
            {title.length > 24 ?
              `${title.substring(0, 24)}...` : title
            }
          </h4>
					<h4 className="text-lg font-bold">
            <span className="text-xs relative bottom-1">$</span>
            {price}
            <span className="text-xs relative bottom-1">.00</span>
          </h4>
				</div>

				<div className="flex flex-col pt-2 h-1/2">
					<p className="text-xs text-gray-400">
          {description.length > 50 ?
            `${description.substring(0, 50)}...` : description
          }
          </p>
					<div className="flex gap-x-1 pt-2">
						<img src={star} alt="star" className="w-3" />
						<img src={star} alt="star" className="w-3" />
						<img src={star} alt="star" className="w-3" />
						<img src={star} alt="star" className="w-3" />
						<img src={star} alt="star" className="w-3" />
					  <p className="text-[10px] ml-1">(121)</p>
					</div>
				</div>

        <button className="w-[103px] h-[36px] text-xs text-center hover:text-white hover:bg-[#003d2a] rounded-3xl border-2 bg-white text-black border-black font-bold transition delay-75">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
