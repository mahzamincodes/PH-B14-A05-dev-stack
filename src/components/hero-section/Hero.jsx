import HeroImg from "../../assets/banner-stack.png"

const Hero = () => {
    return (
        <div className="container mx-auto flex justify-between items-center my-20">

            <div>
                <h1 class="text-4xl md:text-6xl font-extrabold">
                    <span class="block text-[#0F172A] mb-2">Build Your Ideal</span>
                    <span class="inline-block bg-linear-to-r from-[#FF5722] via-[#E91E63] to-[#7B1FA2] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="text-2xl text-[#475569] my-12 w-2xl">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div class="flex flex-wrap gap-4 mt-6 font-sans">
                    <button class="bg-linear-to-r from-[#FF5722] to-[#E91E63] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                        Explore Technologies
                    </button>

                    <button class="bg-white text-[#475569] font-medium px-8 py-3 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:text-[#0f2b69]">
                        Learn More
                    </button>
                </div>

            </div>

            <div>
                <img src={HeroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;