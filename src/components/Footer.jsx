import { logo } from "../assets";

function Footer() {
	return (
		<>
			<div className="bg-[#003d2a] md:h-[40vh] text-[#606268] p-7 mt-36">
				<div className="md:flex md:gap-x-16 md:justify-center">
					<div className="">
						<div className="flex items-center gap-5 pt-5 text-sm">
							<img src={logo} alt="Logo" className="w-10" />
							<h1 className="text-white text-xl text-center mt-3">Shopcart</h1>
						</div>
						<p className="text-justify text-[#9b9aa5] pt-5 text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsam, consequuntur. Quia quibusdam mollitia natus <br /> asperiores. Enim quasi quisquam distinctio! Excepturi!
						</p>
						<div className="Logo"></div>
					</div>
					<div className="text-[#9b9aa5] flex flex-col">
						<div className="flex flex-col items-start gap-y-2 pt-5 text-sm">
							<h3 className="text-[#606268]">CANDIDATES</h3>
							<a href="/" className="hover:text-white">
								For Candidates
							</a>
							<a href="/" className="hover:text-white">
								Candidate Sign Up
							</a>
							<a href="/" className="hover:text-white">
								Invite and Earn ₹15k
							</a>
							<a href="/" className="hover:text-white">
								Candidate FAQ
							</a>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-col items-start gap-y-2 pt-5 text-sm">
							<h3>Employers</h3>
							<a href="/" className="hover:text-white text-[#9b9aa5]">
								For Employers
							</a>
							<a href="/" className="hover:text-white text-[#9b9aa5]">
								Employer Sign Up
							</a>
							<a href="/" className="hover:text-white text-[#9b9aa5]">
								Employer FAQ
							</a>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-col items-start pt-5 text-sm gap-y-2">
							<h3>Company</h3>
							<a href="/" className="hover:text-white text-[#9b9aa5] ">
								Careers
							</a>
							<a href="/" className="hover:text-white text-[#9b9aa5]">
								Privacy Policy
							</a>
						</div>
					</div>
					<div>
						<div className="flex flex-col items-start pt-5 text-sm">
							<h3>Partners</h3>
							<img
								src="https://d383au3bye3rv1.cloudfront.net/static/images/landing/codechef-directi-for-lp.png"
								alt="Logo"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="Lower Footer bg-[#003122] text-center">
				<p className="text-[#9b9aa5]">
					© 2023 Shopcart. All Rights Reserved
				</p>
			</div>
		</>
	);
}

export default Footer;
