import Logo from "../assets/logo-text.png"
import HamburgerImg from "../assets/hamburger.png"
import { useState } from "react"


const Navbar = () => {
    return (

        

    <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#e8ebee] py-5 mb-5 px-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="block md:hidden">
                <img src={HamburgerImg} alt="Menu" />
            </div>

            <img src={Logo} alt="" />

            <ul className="hidden md:flex justify-between items-center gap-5">
                <li><a href="" className="text-[20px] font-semibold"><span className="text-[#E04389]">Home</span></a></li>
                <li><a href="" className="text-[20px] font-semibold text-[#7b8188]">Technologies</a></li>
                <li><a href="" className="text-[20px] font-semibold text-[#7b8188]">Projects</a></li>
                <li><a href="" className="text-[20px] font-semibold text-[#7b8188]">About</a></li>
                <li><a href="" className="text-[20px] font-semibold text-[#7b8188]">Contact</a></li>
            </ul>

            <div className="flex items-center gap-8">
                <button>Sign In</button>
                {/* <button className="btn btn-outline btn-secondary rounded-4xl mr-4">Sign In</button> */}
                <button className="btn btn-secondary rounded-4xl">Sign Up</button>
            </div>
        </div>
    </nav>


    );
};

export default Navbar;