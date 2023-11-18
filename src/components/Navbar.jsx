import React, { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"

import { styles } from "../style"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"

const Navbar = () => {
	const [active, setActive] = useState("")
	const [toggle, setToggle] = useState(false)

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2 "
					onClick={() => {
						setActive("")
						window.scrollTo(0, 0)
					}}
				>
					<img src={logo} alt="logo" className="w-10 h-10" />
					<p className="text-white text-[18px] font-bold cursor-pointer">
						{" "}
						Shashank <span className="sm:block hidden">Nayak</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? "text-white"
									: "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? menu : close}
						alt="menu"
						className="w-[28px] h-[28px] cursor-pointer object-contain"
						onClick={() => {
							setToggle(!toggle)
						}}
					/>

					<div
						className={`${
							toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 rounded-xl min-w-[140px] mx-4 my-2 right-0 z-10`}
					>
						<ul className="list-none flex flex-col justify-end items-start gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? "text-white"
											: "text-secondary"
									} font-poppins font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
