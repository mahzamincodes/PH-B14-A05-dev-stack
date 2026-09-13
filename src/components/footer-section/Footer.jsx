import FooterLogo from "../../assets/logo-text.png"

const Footer = () => {
    return (
        
        <div className="container mx-auto mt-30">
            <div className=" flex gap-10 w-full p-4 border-b-2 border-[#e8ebee] pb-20">
  
                <div className="flex-2 py-4">
                    <img src={FooterLogo}  alt="" />
                    <p className="my-10 text-[#64748B] text-[20px]">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    <a href="" className="text-[#475569] mr-5 text-[18px] font-bold">GitHub</a>
                    <a href="" className="text-[#475569] mr-5 text-[18px] font-bold">Twitter</a>
                    <a href="" className="text-[#475569] text-[18px] font-bold">LinkedIn</a>
                </div>

                <div className="flex-3 flex justify-between a  p-4">
                    <div>
                        <h1 className="text-2xl font-medium">PRODUCT</h1>
                        <div className="flex flex-col justify-between gap-2 mt-5">
                            <a href="" className="text-[#64748B] mr-5 text-[18px] ">Home</a>
                            <a href="" className="text-[#64748B] mr-5 text-[18px] ">Tecnologies</a>
                            <a href="" className="text-[#64748B] mr-5 text-[18px] ">Projects</a>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl font-medium">COMPANY</h1>
                        <div className="flex flex-col justify-between gap-2 mt-5">
                            <a href="" className="text-[#64748B] mr-5 text-[18px] ">About</a>
                            <a href="" className="text-[#64748B] mr-5 text-[18px] ">Contact</a>
                            <a href="" className="text-[#64748B] mr-5 text-[18px] ">Carrers</a>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl font-medium">LEGAL</h1>
                        <div className="flex flex-col justify-between gap-2 mt-5">
                            <a href="" className="text-[#64748B] mr-5 text-[18px] ">Privacy Policy</a>
                            <a href="" className="text-[#64748B] mr-5 text-[18px] ">Terms of Service</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-between items-center py-5 my-5 ">
                <div>
                    <p className="text-[#64748B] text-[20px]">© 2026 Dev Stack. All rights reserved.</p>
                </div>
                <div className="flex justify-between items-center gap-10">
                    <p className="text-[#64748B] text-[20px]">Privacy</p>
                    <p className="text-[#64748B] text-[20px]">Terms</p>
                </div>
            </div>

        </div>

        


    );
};

export default Footer;